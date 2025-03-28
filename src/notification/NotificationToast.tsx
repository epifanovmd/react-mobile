import React, {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
  ViewStyle,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

export interface NotificationToastOptions {
  icon?: React.JSX.Element;
  type?: "normal" | "success" | "danger" | "warning" | string;
  duration?: number;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  animationDuration?: number;
  successIcon?: React.JSX.Element;
  dangerIcon?: React.JSX.Element;
  warningIcon?: React.JSX.Element;
  successColor?: string;
  dangerColor?: string;
  warningColor?: string;
  normalColor?: string;
  data?: any;
  swipeEnabled?: boolean;
  onPress?: () => void;
  onClose?: () => void;
}

export interface NotificationToastProps extends NotificationToastOptions {
  message: string | React.JSX.Element;
  renderType?: {
    [type: string]: (toast: NotificationToastProps) => React.JSX.Element;
  };
  onDestroy: () => void;
  renderToast?: (toast: NotificationToastProps) => React.JSX.Element;
  hide: () => void;
}

export type NotificationToastRef = { hide: () => Promise<void> };

export const NotificationToast = memo(
  forwardRef<unknown, NotificationToastProps>((props, ref) => {
    const {
      onDestroy,
      onClose,
      icon,
      type = "normal",
      message,
      duration = 5000,
      style,
      textStyle,
      animationDuration = 250,
      successIcon,
      dangerIcon,
      warningIcon,
      successColor,
      dangerColor,
      warningColor,
      normalColor,
      swipeEnabled = true,
      onPress,
      renderToast,
      renderType,
    } = props;

    const opacity = useSharedValue(0);
    const translateY = useSharedValue(-20);
    const { height } = useWindowDimensions();
    const closeTimeoutRef = useRef<any>(null);

    useEffect(() => {
      opacity.value = withTiming(1, { duration: animationDuration });
      translateY.value = withTiming(0, { duration: animationDuration });

      if (duration !== 0) {
        closeTimeoutRef.current = setTimeout(() => {
          runOnJS(handleClose)();
        }, duration);
      }

      return () => {
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
        }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props]);

    const handleClose = () => {
      return new Promise<void>(resolve => {
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
        }
        onClose?.();
        opacity.value = withTiming(0, { duration: animationDuration });
        translateY.value = withTiming(
          -20,
          { duration: animationDuration },
          () => {
            runOnJS(onDestroy)();
            runOnJS(resolve)();
          },
        );
      });
    };

    useImperativeHandle(ref, () => ({
      hide: handleClose,
    }));

    const panGesture = Gesture.Pan()
      .enabled(swipeEnabled)
      .onUpdate(event => {
        if (event.translationY < 0) {
          translateY.value = event.translationY;
        }
      })
      .onEnd(event => {
        if (event.translationY < -30) {
          opacity.value = withTiming(0, { duration: animationDuration });
          translateY.value = withTiming(
            -height,
            { duration: animationDuration },
            () => {
              runOnJS(onDestroy)();
            },
          );
        } else {
          translateY.value = withSpring(0);
        }
      });

    const animatedStyle = useAnimatedStyle(() => ({
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    }));

    let selectedIcon = icon;

    if (!selectedIcon) {
      switch (type) {
        case "success":
          selectedIcon = successIcon;
          break;
        case "danger":
          selectedIcon = dangerIcon;
          break;
        case "warning":
          selectedIcon = warningIcon;
          break;
      }
    }

    let backgroundColor = normalColor || "#333";

    switch (type) {
      case "success":
        backgroundColor = successColor || "rgb(46, 125, 50)";
        break;
      case "danger":
        backgroundColor = dangerColor || "rgb(211, 47, 47)";
        break;
      case "warning":
        backgroundColor = warningColor || "rgb(237, 108, 2)";
        break;
    }

    return (
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.container, animatedStyle]}>
          {renderType?.[type] ? (
            renderType[type](props)
          ) : renderToast ? (
            renderToast(props)
          ) : (
            <TouchableWithoutFeedback disabled={!onPress} onPress={onPress}>
              <View style={[styles.toastContainer, { backgroundColor }, style]}>
                {icon ? <View style={styles.iconContainer}>{icon}</View> : null}
                {React.isValidElement(message) ? (
                  message
                ) : (
                  <Text style={[styles.message, textStyle]}>{message}</Text>
                )}
              </View>
            </TouchableWithoutFeedback>
          )}
        </Animated.View>
      </GestureDetector>
    );
  }),
);

const styles = StyleSheet.create({
  container: { width: "100%", alignItems: "center" },
  toastContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  message: {
    color: "#fff",
    fontWeight: "500",
  },
  iconContainer: {
    marginRight: 5,
  },
});
