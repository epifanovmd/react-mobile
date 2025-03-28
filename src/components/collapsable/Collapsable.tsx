import React, {
  forwardRef,
  memo,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Animated,
  Easing,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import { LayoutChangeEvent } from "react-native/Libraries/Types/CoreEventTypes";

import AnimatedProps = Animated.AnimatedProps;

export interface CollapsableProps extends ViewProps {
  collapsed: boolean;
  collapsedHeight?: number;
  duration?: number;
  align?: "top" | "center" | "bottom";
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
        align = "top",
        easing = Easing.ease,
        opacityAnimation = true,
        enablePointerEvents = true,
        collapsedContent,
        style,
        onAnimationEnd = () => null,
        children,
        ...rest
      },
      ref,
    ) => {
      const contentRef = useRef<View>(null);
      const insteadRef = useRef<View>(null);

      const collapsed = useRef<boolean>(initialCollapsed);

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
        const handleId = measureContent(h => {
          contentHeight.current = h;

          if (!collapsed.current && h !== undefined) {
            animatedHeight.setValue(h);
          }
        });

        return () => {
          cancelAnimationFrame(handleId);
        };
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
          if (collapsed.current && !animating) {
            animatedHeight.setValue(insteadHeight.current);
          }
        } else {
          collapsedHeight.current = _collapsedHeight;
          if (collapsed.current && !animating) {
            animatedHeight.setValue(_collapsedHeight);
          }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [_collapsedHeight, collapsedContent]);

      const measureContent = useCallback(
        (callback?: (height: number) => void) => {
          setMeasuring(true);

          return requestAnimationFrame(() => {
            if (!contentRef) {
              setMeasuring(false);
              callback?.(collapsedHeight.current);
            } else {
              contentRef.current?.measure((x, y, width, height) => {
                measured.current = true;
                setMeasuring(false);
                callback?.(height);
              });
            }
          });
        },
        [],
      );

      const transitionToHeight = useCallback(
        (toValue = 0, toCollapsed: boolean) => {
          setAnimating(true);
          collapsed.current = toCollapsed;

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

          Animated.timing(animatedHeight, {
            toValue,
            duration,
            easing: easing as any,
            useNativeDriver: false,
          }).start(() => {
            setAnimating(false);
            onAnimationEnd();
          });
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
          requestAnimationFrame(() => {
            contentRef.current?.measure((x, y, width, height) => {
              if (height) {
                contentHeight.current = height;
                if (_collapsed && !collapsed.current) {
                  animatedHeight.setValue(height);
                }
              }
              if (_collapsed) {
                transitionToHeight(collapsedHeight.current, _collapsed);
              } else {
                transitionToHeight(contentHeight.current, _collapsed);
              }
            });
          });
        },
        [animatedHeight, transitionToHeight],
      );

      const onLayoutInsteadOf = useCallback(
        (e: LayoutChangeEvent) => {
          const height = e.nativeEvent.layout.height;

          if (collapsed.current && !insteadHeight.current) {
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
            !enablePointerEvents && collapsed.current ? "none" : "auto"
          }
          {...rest}
        >
          {!!collapsedContent && (
            <Animated.View
              ref={insteadRef}
              onLayout={onLayoutInsteadOf}
              style={collapsedContentStyle}
            >
              {collapsedContent}
            </Animated.View>
          )}

          <Animated.View ref={contentRef} style={contentStyle}>
            {children}
          </Animated.View>
        </Animated.View>
      );
    },
  ),
);

const s = StyleSheet.create({
  root: { overflow: "hidden" },
  collapsedContentStyle: {
    position: "absolute",
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
    s.collapsedContentStyle,
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
      contentStyle.position = "absolute";
      contentStyle.left = 0;
      contentStyle.right = 0;
      contentStyle.opacity = 0;
    }
  } else if (align === "center") {
    contentStyle.transform = [
      {
        translateY: animatedHeight.interpolate({
          inputRange: [0, contentHeight],
          outputRange: [contentHeight / -2, 0],
        }),
      },
    ];
  } else if (align === "bottom") {
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
