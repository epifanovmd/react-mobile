import React, { forwardRef, useCallback, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {
  NotificationToast,
  NotificationToastOptions,
  NotificationToastProps,
} from './NotificationToast';
import { useDimensions } from '../hooks';

export interface NotificationActions {
  show: (
    message: string | React.JSX.Element,
    toastOptions?: NotificationToastOptions,
  ) => string;
  update: (
    id: string,
    message: string | React.JSX.Element,
    toastOptions?: NotificationToastOptions,
  ) => void;
  hide: (id: string) => void;
  hideAll: () => void;
  isOpen: (id: string) => boolean;
}

export interface NotificationProps extends NotificationToastOptions {
  renderType?: {
    [type: string]: (toast: NotificationToastProps) => React.JSX.Element;
  };
  offset?: number;
  offsetTop?: number;
  offsetBottom?: number;
  swipeEnabled?: boolean;

  renderToast?(toast: NotificationToastProps): React.JSX.Element;
}

export const Notification = forwardRef<NotificationActions, NotificationProps>(
  (props, ref) => {
    const { offset = 10, offsetTop, offsetBottom, swipeEnabled = true } = props;
    const [toasts, setToasts] = useState<NotificationToastProps[]>([]);
    const { height, width } = useDimensions();

    const update = useCallback(
      (
        id: string,
        message: string | React.JSX.Element,
        toastOptions?: NotificationToastOptions,
      ) => {
        setToasts(items =>
          items.map(toast =>
            toast.id === id ? { ...toast, message, ...toastOptions } : toast,
          ),
        );
      },
      [],
    );

    const hide = useCallback((id: string) => {
      setToasts(items =>
        items.map(toast =>
          toast.id === id ? { ...toast, open: false } : toast,
        ),
      );
    }, []);

    const show = useCallback(
      (
        message: string | React.JSX.Element,
        toastOptions?: NotificationToastOptions,
      ) => {
        let id = toastOptions?.id || Math.random().toString();
        const onDestroy = () => {
          toastOptions?.onClose && toastOptions?.onClose();
          setToasts(items => items.filter(toast => toast.id !== id));
        };

        requestAnimationFrame(() => {
          setToasts(items => [
            {
              id,
              onDestroy,
              message,
              open: true,
              onHide: () => hide(id),
              ...props,
              ...toastOptions,
              swipeEnabled,
            },
            ...items.filter(toast => toast.open),
          ]);
        });

        return id;
      },
      [hide, props, swipeEnabled],
    );

    const hideAll = useCallback(() => {
      setToasts(items => items.map(toast => ({ ...toast, open: false })));
    }, []);

    const isOpen = useCallback(
      (id: string) => {
        return toasts.some(toast => toast.id === id && toast.open);
      },
      [toasts],
    );

    React.useImperativeHandle(ref, () => ({
      show,
      update,
      hide,
      hideAll,
      isOpen,
    }));

    const renderBottomToasts = useCallback(() => {
      const style: ViewStyle = {
        bottom: offsetBottom || offset,
        width: width,
        justifyContent: 'flex-end',
        flexDirection: 'column',
      };

      return (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'position' : undefined}
          style={[styles.container, style]}
          pointerEvents="box-none"
        >
          <SafeAreaView>
            {toasts
              .filter(t => !t.placement || t.placement === 'bottom')
              .map(toast => (
                <NotificationToast key={toast.id} {...toast} />
              ))}
          </SafeAreaView>
        </KeyboardAvoidingView>
      );
    }, [offset, offsetBottom, toasts, width]);

    const renderTopToasts = useCallback(() => {
      const style: ViewStyle = {
        top: offsetTop || offset,
        width: width,
        justifyContent: 'flex-start',
        flexDirection: 'column-reverse',
      };

      return (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'position' : undefined}
          style={[styles.container, style]}
          pointerEvents="box-none"
        >
          <SafeAreaView>
            {toasts
              .filter(t => t.placement === 'top')
              .map(toast => (
                <NotificationToast key={toast.id} {...toast} />
              ))}
          </SafeAreaView>
        </KeyboardAvoidingView>
      );
    }, [offset, offsetTop, toasts, width]);

    const renderCenterToasts = useCallback(() => {
      const style: ViewStyle = {
        top: offsetTop || offset,
        height: height,
        width: width,
        justifyContent: 'center',
        flexDirection: 'column-reverse',
      };

      const data = toasts.filter(t => t.placement === 'center');
      const foundToast = data.length > 0;

      if (!foundToast) {
        return null;
      }

      return (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'position' : undefined}
          style={[styles.container, style]}
          pointerEvents="box-none"
        >
          {toasts
            .filter(t => t.placement === 'center')
            .map(toast => (
              <NotificationToast key={toast.id} {...toast} />
            ))}
        </KeyboardAvoidingView>
      );
    }, [height, offset, offsetTop, toasts, width]);

    return (
      <>
        {renderTopToasts()}
        {renderBottomToasts()}
        {renderCenterToasts()}
      </>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 0,
    position: 'absolute',
    maxWidth: '100%',
    zIndex: 999999,
    elevation: 999999,
    alignSelf: 'center',
  },
  message: {
    color: '#333',
  },
});
