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
    duration = 100,
    align = 'top',
    easing = Easing.ease,
    opacityAnimation = true,
    enablePointerEvents = true,
    collapsedContent,
    style: _style,
    onAnimationEnd = () => null,
    children,
  }) => {
    const contentRef = useRef<View>(null);
    const insteadRef = useRef<View>(null);

    const animation = useRef<CompositeAnimation | null>(null);

    const [measuring, setMeasuring] = useState<boolean>(false);
    const measured = useRef<boolean>(false);

    const [contentHeight, setContentHeight] = useState<number>(0);
    const insteadHeight = useRef<number>(0);
    const collapsedHeight = useRef<number>(_collapsedHeight);
    const animatedHeight = useRef(
      new Animated.Value(collapsedHeight.current),
    ).current;

    useEffect(() => {
      measureContent(h => {
        setContentHeight(h);

        if (!collapsed) {
          animatedHeight.setValue(h);
        }
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      if (contentHeight) {
        _toggleCollapsed(collapsed);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [collapsed]);

    useEffect(() => {
      if (collapsedContent && !_collapsedHeight) {
        collapsedHeight.current = insteadHeight.current;
        if (collapsed) {
          _transitionToHeight(insteadHeight.current);
        }
      } else {
        collapsedHeight.current = _collapsedHeight;
        if (collapsed) {
          _transitionToHeight(_collapsedHeight);
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_collapsedHeight]);

    useEffect(() => {
      if (!collapsedContent && collapsedHeight.current) {
        setCollapsedValue(_collapsedHeight);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [collapsedContent]);

    const setCollapsedValue = useCallback(
      (value: number) => {
        collapsedHeight.current = value;
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
            callback?.(collapsedHeight.current);
          } else {
            contentRef.current?.measure((x, y, width, height) => {
              setMeasuring(false);
              measured.current = true;
              callback?.(height);
            });
          }
        });
      },
      [],
    );

    const _transitionToHeight = useCallback(
      (toValue: number = 0) => {
        if (animation.current) {
          animation.current.stop();
        }

        animation.current = Animated.timing(animatedHeight, {
          toValue,
          duration,
          easing: easing as any,
          useNativeDriver: false,
        });

        animation.current.start(() => {
          onAnimationEnd();
        });
      },
      [animatedHeight, duration, easing, onAnimationEnd],
    );

    const _toggleCollapsed = useCallback(
      (_collapsed: boolean) => {
        if (_collapsed) {
          _transitionToHeight(collapsedHeight.current);
        } else {
          _transitionToHeight(contentHeight);
        }
      },
      [_transitionToHeight, contentHeight],
    );

    const onLayoutInsteadOf = useCallback(
      (e: LayoutChangeEvent) => {
        const height = e.nativeEvent.layout.height;

        if (collapsed) {
          animatedHeight.setValue(_collapsedHeight || height);
        }

        insteadHeight.current = height;
        collapsedHeight.current = _collapsedHeight || height;
      },
      [_collapsedHeight, animatedHeight, collapsed],
    );

    const hasKnownHeight =
      (!measuring && (measured.current || collapsed)) || contentHeight;

    const style: AnimatedProps<StyleProp<ViewStyle>> =
      hasKnownHeight || (collapsed && (contentHeight || _collapsedHeight))
        ? {
            height: animatedHeight,
          }
        : undefined;

    const contentStyle = getContentStyle({
      measuring,
      collapsedHeight: collapsedHeight.current,
      align,
      animatedHeight,
      contentHeight,
      collapsed,
    });

    const collapsedContentStyle = {
      zIndex: collapsed ? 2 : 1,
      opacity:
        contentHeight && opacityAnimation
          ? animatedHeight.interpolate({
              inputRange: [
                collapsedHeight.current,
                contentHeight / 2,
                contentHeight,
              ],
              outputRange: [1, 1, 0],
              extrapolate: 'clamp',
            })
          : collapsed
          ? 1
          : 0,
    };

    const childrenStyle = {
      opacity: !collapsedContent
        ? 1
        : contentHeight && opacityAnimation
        ? animatedHeight.interpolate({
            inputRange: [
              collapsedHeight.current,
              contentHeight / 2,
              contentHeight,
            ],
            outputRange: [0, 1, 1],
            extrapolate: 'clamp',
          })
        : collapsed
        ? 0
        : 1,
    };

    return (
      <Animated.View
        style={[_style, style, { overflow: 'hidden' }]}
        pointerEvents={!enablePointerEvents && collapsed ? 'none' : 'auto'}
      >
        <RenderConditional if={!!collapsedContent}>
          <Animated.View
            ref={insteadRef}
            onLayout={onLayoutInsteadOf}
            style={[
              (!!contentHeight || !collapsed) && s.collapsedContentStyle,
              collapsedContentStyle,
            ]}
          >
            {collapsedContent}
          </Animated.View>
        </RenderConditional>
        <Animated.View ref={contentRef} style={[contentStyle, childrenStyle]}>
          {children}
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
  collapsed: boolean;
}) => {
  const contentStyle: AnimatedProps<StyleProp<ViewStyle>> = {
    zIndex: params.collapsed ? 1 : 2,
  };

  if ((params.measuring && !params.collapsedHeight) || !params.contentHeight) {
    if (params.collapsed) {
      contentStyle.position = 'absolute';
      contentStyle.left = 0;
      contentStyle.right = 0;
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

  return contentStyle;
};
