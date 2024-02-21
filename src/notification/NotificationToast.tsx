import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  PanResponder,
  PanResponderGestureState,
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';

export interface NotificationToastOptions {
  icon?: React.JSX.Element;
  type?: 'normal' | 'success' | 'danger' | 'warning' | string;
  duration?: number;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  animationDuration?: number;
  animationType?: 'slide-in' | 'zoom-in';
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
  forwardRef<NotificationToastRef, NotificationToastProps>((props, ref) => {
    let {
      onDestroy,
      onClose,
      icon,
      type = 'normal',
      message,
      duration = 5000,
      style,
      textStyle,
      animationDuration = 250,
      animationType = 'slide-in',
      successIcon,
      dangerIcon,
      warningIcon,
      successColor,
      dangerColor,
      warningColor,
      normalColor,
      swipeEnabled,
      onPress,
      renderToast,
      renderType,
    } = props;

    const containerRef = useRef<View>(null);

    const [animation] = useState(new Animated.Value(0));
    const [panResponderAnimation] = useState<Animated.ValueXY>(
      new Animated.ValueXY({ x: 0, y: 0 }),
    );
    const closeTimeoutRef = useRef<any>(null);
    const { height } = useWindowDimensions();

    useEffect(() => {
      Animated.timing(animation, {
        toValue: 1,
        useNativeDriver: Platform.OS !== 'web',
        duration: animationDuration,
      }).start();
      if (duration !== 0) {
        closeTimeoutRef.current = setTimeout(() => {
          handleClose().then();
        }, duration);
      }

      return () => {
        closeTimeoutRef.current && clearTimeout(closeTimeoutRef.current);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [duration]);

    const handleClose = useCallback(() => {
      return new Promise<void>(resolve => {
        closeTimeoutRef.current && clearTimeout(closeTimeoutRef.current);
        onClose?.();

        Animated.timing(animation, {
          toValue: 0,
          useNativeDriver: true,
          duration: animationDuration,
        }).start(() => {
          onDestroy();
          resolve();
        });
      });
    }, [animation, animationDuration, onClose, onDestroy]);

    const panReleaseToTop = useCallback(
      (gestureState: PanResponderGestureState) => {
        onClose?.();

        Animated.timing(panResponderAnimation, {
          toValue: { x: gestureState.dx, y: (-height / 10) * 9 },
          useNativeDriver: true,
          duration: 250,
        }).start(() => onDestroy());
      },
      [onClose, panResponderAnimation, height, onDestroy],
    );

    const getPanResponder = useMemo(() => {
      const swipeThreshold = Platform.OS === 'android' ? 10 : 0;

      return PanResponder.create({
        onMoveShouldSetPanResponder: (_, gestureState) => {
          return (
            Math.abs(gestureState.dx) > swipeThreshold ||
            Math.abs(gestureState.dy) > swipeThreshold
          );
        },
        onPanResponderMove: (_, gestureState) => {
          panResponderAnimation.setValue({
            x: gestureState.dx,
            y: gestureState.dy > 0 ? 0 : gestureState.dy,
          });
        },
        onPanResponderRelease: (_, gestureState) => {
          if (gestureState.dy < -30) {
            panReleaseToTop(gestureState);
          } else {
            Animated.spring(panResponderAnimation, {
              toValue: { x: 0, y: 0 },
              useNativeDriver: Platform.OS !== 'web',
            }).start();
          }
        },
      });
    }, [panResponderAnimation, panReleaseToTop]);

    if (icon === undefined) {
      switch (type) {
        case 'success': {
          if (successIcon) {
            icon = successIcon;
          }
          break;
        }

        case 'danger': {
          if (dangerIcon) {
            icon = dangerIcon;
          }
          break;
        }
        case 'warning': {
          if (warningIcon) {
            icon = warningIcon;
          }
          break;
        }
      }
    }

    let backgroundColor = normalColor || '#333';
    switch (type) {
      case 'success':
        backgroundColor = successColor || 'rgb(46, 125, 50)';
        break;
      case 'danger':
        backgroundColor = dangerColor || 'rgb(211, 47, 47)';
        break;
      case 'warning':
        backgroundColor = warningColor || 'rgb(237, 108, 2)';
        break;
      default:
        break;
    }

    const animationStyle: Animated.WithAnimatedObject<ViewStyle> = useMemo(
      () => ({
        opacity: animation,
        transform: [
          ...(swipeEnabled
            ? [panResponderAnimation.getTranslateTransform()[1]]
            : []),
          ...(animationType === 'zoom-in'
            ? [
                {
                  scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.7, 1],
                  }),
                },
              ]
            : []),
          {
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [-20, 0],
            }),
          },
        ],
      }),
      [animation, animationType, panResponderAnimation, swipeEnabled],
    );

    React.useImperativeHandle(ref, () => ({ hide: handleClose }));

    return (
      <Animated.View
        pointerEvents={'box-none'}
        ref={containerRef}
        {...(swipeEnabled ? getPanResponder.panHandlers : null)}
        style={[styles.container, animationStyle]}
      >
        {renderType && renderType[type] ? (
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
    );
  }),
);

const styles = StyleSheet.create({
  container: { width: '100%', alignItems: 'center' },
  toastContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  message: {
    color: '#fff',
    fontWeight: '500',
  },
  iconContainer: {
    marginRight: 5,
  },
});
