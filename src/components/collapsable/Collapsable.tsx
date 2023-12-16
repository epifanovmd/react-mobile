import React, {
  forwardRef,
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
import AnimatedProps = Animated.AnimatedProps;
import { RenderConditional } from '../renderer';

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

export interface Collapsable {
  toggle: (value?: boolean) => void;
  collapsed: boolean;
}

export const Collapsable = memo(
  forwardRef<Collapsable, PropsWithChildren<CollapsableProps>>(
    (
      {
        collapsed: initialCollapsed = false,
        collapsedHeight: _collapsedHeight = 0,
        duration = 100,
        align = 'top',
        easing = Easing.ease,
        opacityAnimation = true,
        enablePointerEvents = true,
        collapsedContent,
        style,
        onAnimationEnd = () => null,
        children,
      },
      ref,
    ) => {
      const contentRef = useRef<View>(null);
      const insteadRef = useRef<View>(null);

      const collapsed = useRef<boolean>(initialCollapsed);
      const animation = useRef<CompositeAnimation | null>(null);

      const [measuring, setMeasuring] = useState<boolean>(false);
      const [animating, setAnimating] = useState<boolean>(false);
      const measured = useRef<boolean>(false);

      // const [contentHeight, setContentHeight] = useState<number>(0);
      const contentHeight = useRef<number>(0);
      const collapsedHeight = useRef<number>(_collapsedHeight);
      const insteadHeight = useRef<number>(0);

      const animatedHeight = useRef(
        new Animated.Value(collapsedHeight.current),
      ).current;

      const animatedOpacityContent = useRef(
        new Animated.Value(collapsed.current ? 0 : 1),
      ).current;

      const animatedOpacityCollapsedContent = useRef(
        new Animated.Value(collapsed.current ? 1 : 0),
      ).current;

      useEffect(() => {
        measureContent(h => {
          contentHeight.current = h;

          if (!collapsed.current) {
            animatedHeight.setValue(h);
          }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      useEffect(() => {
        if (measured.current) {
          _toggleCollapsed(initialCollapsed);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [initialCollapsed]);

      useEffect(() => {
        if (collapsedContent && !_collapsedHeight) {
          collapsedHeight.current = insteadHeight.current;
          // setCollapsedValue(collapsedHeight.current);
          if (collapsed.current) {
            transitionToHeight(insteadHeight.current, collapsed.current, true);
          }
        } else {
          collapsedHeight.current = _collapsedHeight;
          // setCollapsedValue(collapsedHeight.current);
          if (collapsed.current) {
            transitionToHeight(_collapsedHeight, collapsed.current, true);
          }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [_collapsedHeight, collapsedContent]);

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

      const transitionToHeight = useCallback(
        (
          toValue: number = 0,
          toCollapsed: boolean,
          withoutMeasuring: boolean = false,
        ) => {
          const startAnimation = () => {
            setAnimating(true);
            if (animation.current) {
              animation.current.stop();
            }

            Animated.timing(animatedOpacityContent, {
              duration,
              toValue: toCollapsed ? 0 : 1,
              useNativeDriver: true,
            }).start();
            Animated.timing(animatedOpacityCollapsedContent, {
              duration,
              toValue: toCollapsed ? 1 : 0,
              useNativeDriver: true,
            }).start();

            animation.current = Animated.timing(animatedHeight, {
              toValue,
              duration,
              easing: easing as any,
              useNativeDriver: false,
            });

            animation.current.start(() => {
              setAnimating(false);
              onAnimationEnd();
            });
          };

          if (toCollapsed && !withoutMeasuring) {
            contentRef.current?.measure((x, y, width, height) => {
              if (height) {
                contentHeight.current = height;
                animatedHeight.setValue(height);

                startAnimation();
              }
            });
          } else {
            startAnimation();
          }
        },
        [
          animatedHeight,
          animatedOpacityCollapsedContent,
          animatedOpacityContent,
          duration,
          easing,
          onAnimationEnd,
        ],
      );

      const _toggleCollapsed = useCallback(
        (_collapsed: boolean) => {
          collapsed.current = _collapsed;
          if (_collapsed) {
            transitionToHeight(collapsedHeight.current, collapsed.current);
          } else {
            transitionToHeight(contentHeight.current, collapsed.current);
          }
        },
        [transitionToHeight],
      );

      const onLayoutInsteadOf = useCallback(
        (e: LayoutChangeEvent) => {
          const height = e.nativeEvent.layout.height;

          if (collapsed.current) {
            animatedHeight.setValue(_collapsedHeight || height);
          }

          insteadHeight.current = height;
          collapsedHeight.current = _collapsedHeight || height;
        },
        [_collapsedHeight, animatedHeight],
      );

      const needHeight =
        !measuring && measured.current && (collapsed.current || animating);

      const rootStyle: AnimatedProps<StyleProp<ViewStyle>> = needHeight
        ? { height: animatedHeight }
        : undefined;

      const collapsedContentStyle = getCollapsedContentStyle(
        animatedOpacityCollapsedContent,
        collapsed.current,
        contentHeight.current,
        opacityAnimation,
      );

      const contentStyle = getContentStyle(
        animatedHeight,
        animatedOpacityContent,
        collapsed.current,
        measuring,
        collapsedHeight.current,
        contentHeight.current,
        !!collapsedContent,
        opacityAnimation,
        align,
      );

      React.useImperativeHandle(ref, () => ({
        toggle: (value?: boolean) => {
          _toggleCollapsed(value ?? !collapsed.current);
        },
        collapsed: collapsed.current,
      }));

      return (
        <Animated.View
          style={[s.root, style, rootStyle]}
          pointerEvents={
            !enablePointerEvents && collapsed.current ? 'none' : 'auto'
          }
        >
          <RenderConditional if={!!collapsedContent}>
            <Animated.View
              ref={insteadRef}
              onLayout={onLayoutInsteadOf}
              style={collapsedContentStyle}
            >
              {collapsedContent}
            </Animated.View>
          </RenderConditional>
          <Animated.View ref={contentRef} style={contentStyle}>
            {children}
          </Animated.View>
        </Animated.View>
      );
    },
  ),
);

const s = StyleSheet.create({
  root: { overflow: 'hidden' },
  collapsedContentStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
});

const getCollapsedContentStyle = (
  animatedOpacityCollapsedContent: Animated.Value,
  collapsed: boolean,
  contentHeight: number,
  opacityAnimation: boolean,
) => {
  return [
    (!!contentHeight || !collapsed) && s.collapsedContentStyle,
    {
      zIndex: collapsed ? 2 : 1,
      opacity:
        contentHeight && opacityAnimation
          ? animatedOpacityCollapsedContent
          : collapsed
          ? 1
          : 0,
    },
  ];
};

const getContentStyle = (
  animatedHeight: Animated.Value,
  animatedOpacityContent: Animated.Value,
  collapsed: boolean,
  measuring: boolean,
  collapsedHeight: number,
  contentHeight: number,
  hasCollapsedContent: boolean,
  opacityAnimation: boolean,
  align: string,
) => {
  const contentStyle: AnimatedProps<StyleProp<ViewStyle>> = {
    zIndex: collapsed ? 1 : 2,
    opacity: !hasCollapsedContent
      ? 1
      : contentHeight && opacityAnimation
      ? animatedOpacityContent
      : collapsed
      ? 0
      : 1,
  };

  if ((measuring && !collapsedHeight) || !contentHeight) {
    if (collapsed) {
      contentStyle.position = 'absolute';
      contentStyle.left = 0;
      contentStyle.right = 0;
      contentStyle.opacity = 0;
    }
  } else if (align === 'center') {
    contentStyle.transform = [
      {
        translateY: animatedHeight.interpolate({
          inputRange: [0, contentHeight],
          outputRange: [contentHeight / -2, 0],
        }),
      },
    ];
  } else if (align === 'bottom') {
    contentStyle.transform = [
      {
        translateY: animatedHeight.interpolate({
          inputRange: [0, contentHeight],
          outputRange: [-contentHeight, 0],
        }),
      },
    ];
  }

  return contentStyle;
};
