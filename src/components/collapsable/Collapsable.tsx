import React, {
  FC,
  memo,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  Easing,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { LayoutChangeEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import { RenderConditional } from '../renderer';
import AnimatedProps = Animated.AnimatedProps;

type EndResult = { finished: boolean };
type EndCallback = (result: EndResult) => void;

export interface CompositeAnimation {
  start: (callback?: EndCallback) => void;
  stop: () => void;
  reset: () => void;
}

export interface CollapsableProps {
  collapsed: boolean;
  collapsedHeight?: number;
  duration?: number;
  align?: 'top' | 'center' | 'bottom';
  easing?: Easing[keyof Easing] | ((n: number) => number);
  renderChildrenCollapsed?: boolean;
  opacityAnimation?: boolean;
  enablePointerEvents?: boolean;
  collapsedContent?: React.JSX.Element;
  style?: StyleProp<ViewStyle>;
  onAnimationEnd?: () => void;
}

export const Collapsible: FC<PropsWithChildren<CollapsableProps>> = memo(
  ({
    collapsed = false,
    collapsedHeight: _collapsedHeight = 0,
    duration = 200,
    align = 'top',
    easing = Easing.ease,
    renderChildrenCollapsed = true,
    opacityAnimation = true,
    enablePointerEvents = true,
    collapsedContent,
    style: _style,
    onAnimationEnd = () => null,
    children,
  }) => {
    const contentRef = useRef<View>(null);
    const insteadRef = useRef<View>(null);
    const _animation = useRef<CompositeAnimation | null>(null);

    const [collapsedHeight, setCollapsedHeight] = useState(_collapsedHeight);

    const [measuring, setMeasuring] = useState<boolean>(false);
    const [measured, setMeasured] = useState<boolean>(false);
    const animatedHeight = useRef(new Animated.Value(collapsedHeight)).current;
    const [contentHeight, setContentHeight] = useState<number>(0);
    const insteadHeight = useRef<number>(0);
    const [animating, setAnimating] = useState<boolean>(false);
    const [initialized, setInitialized] = useState<boolean>(false);

    useEffect(() => {
      measureContent(h => {
        setContentHeight(h);

        if (!collapsed) {
          animatedHeight.setValue(h);
        }

        setInitialized(true);
      });

      return () => {
        setInitialized(false);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      if (initialized) {
        _toggleCollapsed(collapsed);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [collapsed]);

    useEffect(() => {
      if (collapsedContent && !_collapsedHeight) {
        setCollapsedValue(insteadHeight.current);
      } else {
        setCollapsedValue(_collapsedHeight);
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_collapsedHeight]);

    useEffect(() => {
      if (!collapsedContent && collapsedHeight) {
        setCollapsedValue(_collapsedHeight);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [collapsedContent]);

    const setCollapsedValue = useCallback(
      (value: number) => {
        setCollapsedHeight(value);
        if (collapsed) {
          animatedHeight.setValue(value);
        }
      },
      [animatedHeight, collapsed],
    );

    const measureContent = useCallback(
      (callback?: (height: number) => void) => {
        setMeasuring(true);

        requestAnimationFrame(() => {
          if (!contentRef) {
            setMeasuring(false);
            callback?.(collapsedHeight);
          } else {
            contentRef.current?.measure((x, y, width, height) => {
              setMeasuring(false);
              setMeasured(true);
              callback?.(height);
            });
          }
        });
      },
      [collapsedHeight],
    );

    const _transitionToHeight = useCallback(
      (toValue: number = 0) => {
        setAnimating(true);

        if (_animation.current) {
          _animation.current.stop();
        }

        _animation.current = Animated.timing(animatedHeight, {
          toValue,
          duration,
          easing: easing as any,
          useNativeDriver: false,
        });

        _animation.current.start(() => {
          setAnimating(false);
          onAnimationEnd();
        });
      },
      [animatedHeight, duration, easing, onAnimationEnd],
    );

    const _toggleCollapsed = useCallback(
      (_collapsed: boolean) => {
        if (_collapsed) {
          _transitionToHeight(collapsedHeight);
        } else {
          _transitionToHeight(contentHeight);
        }
      },
      [_transitionToHeight, collapsedHeight, contentHeight],
    );

    const _handleLayoutChange = useCallback(
      (event: LayoutChangeEvent) => {
        const _contentHeight = event.nativeEvent.layout.height;

        if (
          animating ||
          collapsed ||
          measuring ||
          contentHeight === _contentHeight
        ) {
          return;
        }

        animatedHeight.setValue(_contentHeight);
        setContentHeight(_contentHeight);
      },
      [animatedHeight, animating, collapsed, contentHeight, measuring],
    );

    const onLayoutInsteadOf = useCallback(
      (e: LayoutChangeEvent) => {
        const height = e.nativeEvent.layout.height;

        if (collapsed) {
          animatedHeight.setValue(_collapsedHeight || height);
        }

        insteadHeight.current = height;
        setCollapsedHeight(_collapsedHeight || height);
      },
      [_collapsedHeight, animatedHeight, collapsed],
    );

    const hasKnownHeight =
      (!measuring && (measured || collapsed)) || initialized;

    const style: AnimatedProps<StyleProp<ViewStyle>> =
      hasKnownHeight || (collapsed && (initialized || _collapsedHeight))
        ? {
            overflow: 'hidden',
            height: animatedHeight,
          }
        : undefined;

    const contentStyle = getContentStyle({
      measuring,
      collapsedHeight,
      align,
      animatedHeight,
      contentHeight,
      animating,
      collapsed,
      initialized,
    });

    const shouldRenderChildren =
      renderChildrenCollapsed ||
      !collapsed ||
      (collapsed && (animating || measuring));

    const collapsedContentStyle = {
      zIndex: collapsed ? 2 : 1,
      opacity:
        initialized && opacityAnimation
          ? animatedHeight.interpolate({
              inputRange: [collapsedHeight, contentHeight / 2, contentHeight],
              outputRange: [1, 1, 0],
              extrapolate: 'clamp',
            })
          : collapsed
          ? 1
          : 0,
    };

    const childrenStyle = {
      zIndex: collapsed ? 1 : 2,
      opacity: !collapsedContent
        ? 1
        : initialized && opacityAnimation
        ? animatedHeight.interpolate({
            inputRange: [collapsedHeight, contentHeight / 2, contentHeight],
            outputRange: [0, 1, 1],
            extrapolate: 'clamp',
          })
        : collapsed
        ? 0
        : 1,
    };

    console.log('render');

    return (
      <Animated.View
        style={[_style, style]}
        pointerEvents={!enablePointerEvents && collapsed ? 'none' : 'auto'}
      >
        <RenderConditional if={!!collapsedContent}>
          <Animated.View
            ref={insteadRef}
            onLayout={onLayoutInsteadOf}
            style={[
              (initialized || !collapsed) && s.collapsedContentStyle,
              collapsedContentStyle,
            ]}
          >
            {collapsedContent}
          </Animated.View>
        </RenderConditional>
        <Animated.View
          ref={contentRef}
          style={contentStyle}
          onLayout={_handleLayoutChange}
        >
          <Animated.View style={childrenStyle}>
            {shouldRenderChildren && children}
          </Animated.View>
        </Animated.View>
      </Animated.View>
    );
  },
);

const s = StyleSheet.create({
  collapsedContentStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
});

const getContentStyle = (params: {
  measuring: boolean;
  collapsedHeight: number;
  align: string;
  animatedHeight: Animated.Value;
  contentHeight: number;
  animating: boolean;
  collapsed: boolean;
  initialized: boolean;
}) => {
  const contentStyle: AnimatedProps<StyleProp<ViewStyle>> = {};

  if ((params.measuring && !params.collapsedHeight) || !params.initialized) {
    if (params.collapsed) {
      contentStyle.position = 'absolute';
      contentStyle.opacity = 0;
    }
  } else if (params.align === 'center') {
    contentStyle.transform = [
      {
        translateY: params.animatedHeight.interpolate({
          inputRange: [0, params.contentHeight],
          outputRange: [params.contentHeight / -2, 0],
        }),
      },
    ];
  } else if (params.align === 'bottom') {
    contentStyle.transform = [
      {
        translateY: params.animatedHeight.interpolate({
          inputRange: [0, params.contentHeight],
          outputRange: [-params.contentHeight, 0],
        }),
      },
    ];
  }
  if (params.animating) {
    contentStyle.height = params.contentHeight;
  }

  return contentStyle;
};
