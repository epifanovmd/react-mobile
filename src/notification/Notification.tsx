import React, {
  forwardRef,
  memo,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  SafeAreaView,
  StyleProp,
  StyleSheet,
  useWindowDimensions,
  View,
  ViewStyle,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  NotificationToast,
  NotificationToastOptions,
  NotificationToastProps,
  NotificationToastRef,
} from "./NotificationToast";

export interface NotificationActions {
  show: (
    message: string | React.JSX.Element,
    toastOptions?: NotificationToastOptions,
  ) => void;
  update: (
    message: string | React.JSX.Element,
    toastOptions?: NotificationToastOptions,
  ) => void;
  hide: () => Promise<void>;
}

export interface NotificationProps extends NotificationToastOptions {
  containerStyle?: StyleProp<ViewStyle>;
  renderType?: {
    [type: string]: (toast: NotificationToastProps) => React.JSX.Element;
  };
  swipeEnabled?: boolean;
  safeArea?: boolean;

  renderToast?(toast: NotificationToastProps): React.JSX.Element;
}

export const Notification = memo(
  forwardRef<NotificationActions, NotificationProps>((props, ref) => {
    const { swipeEnabled = true, safeArea = false, containerStyle } = props;
    const toastRef = useRef<NotificationToastRef | null>(null);
    const [toast, setToast] = useState<NotificationToastProps | null>(null);
    const { width } = useWindowDimensions();
    const { top } = useSafeAreaInsets();

    const hide = useCallback(() => {
      return toastRef.current?.hide() || Promise.resolve();
    }, []);

    const show = useCallback(
      async (
        message: string | React.JSX.Element,
        toastOptions?: NotificationToastOptions,
      ) => {
        await toastRef.current?.hide();

        const onDestroy = () => {
          setToast(null);
          toastRef.current = null;
        };

        setToast({
          onDestroy,
          message,
          hide,
          swipeEnabled,
          ...props,
          ...toastOptions,
          onClose: () => {
            props.onClose?.();
            toastOptions?.onClose?.();
          },
          onPress: () => {
            props.onPress?.();
            toastOptions?.onPress?.();
          },
        });
      },
      [hide, props, swipeEnabled],
    );

    const update = useCallback(
      (
        message: string | React.JSX.Element,
        toastOptions?: NotificationToastOptions,
      ) => {
        setToast(state => {
          if (state) {
            return { ...state, message, ...toastOptions };
          } else {
            show(message, toastOptions).then();

            return null;
          }
        });
      },
      [show],
    );

    React.useImperativeHandle(ref, () => ({
      show,
      update,
      hide,
    }));

    const SafeAreOrView = useMemo(
      () => (safeArea ? SafeAreaView : View),
      [safeArea],
    );

    return (
      <View style={[styles.container, { width }, containerStyle]}>
        <SafeAreOrView>
          {!!toast && (
            <NotificationToast
              ref={toastRef}
              {...toast}
              style={[safeArea ? undefined : { paddingTop: top }, toast.style]}
            />
          )}
        </SafeAreOrView>
      </View>
    );
  }),
);

const styles = StyleSheet.create({
  container: {
    flex: 0,
    position: "absolute",
    maxWidth: "100%",
    zIndex: 999999,
    elevation: 999999,
    alignSelf: "center",
    justifyContent: "flex-start",
    flexDirection: "column-reverse",
  },
});
