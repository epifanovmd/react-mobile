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
  renderType?: {
    [type: string]: (toast: NotificationToastProps) => React.JSX.Element;
  };
  offset?: number;
  offsetTop?: number;
  swipeEnabled?: boolean;
  safeArea?: boolean;

  renderToast?(toast: NotificationToastProps): React.JSX.Element;
}

export const Notification = memo(
  forwardRef<NotificationActions, NotificationProps>((props, ref) => {
    const {
      offset = 0,
      offsetTop,
      swipeEnabled = true,
      safeArea = false,
    } = props;
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

    const style: ViewStyle = useMemo(
      () => ({
        top: offsetTop || offset,
        width: width,
        justifyContent: "flex-start",
        flexDirection: "column-reverse",
      }),
      [offset, offsetTop, width],
    );

    const notificationStyle = useCallback(
      (t: NotificationToastProps) => [
        t.style,
        safeArea ? undefined : { paddingTop: top },
      ],
      [safeArea, top],
    );

    return (
      <View style={[styles.container, style]}>
        <SafeAreOrView>
          {!!toast && (
            <NotificationToast
              ref={toastRef}
              {...toast}
              style={notificationStyle(toast)}
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
  },
  message: {
    color: "#333",
  },
});
