import React, { FC, memo, useEffect, useRef, useState } from 'react';
import {
  Notification,
  NotificationActions,
  NotificationProps,
} from './NotificationActions';
import NotificationManager from './notificationManager';

type PropsWithChildren = NotificationProps & {
  children: React.ReactNode;
};

export const NotificationContext = React.createContext(
  {} as NotificationActions,
);

export const NotificationProvider: FC<PropsWithChildren> = memo(
  ({ children, ...props }) => {
    const toastRef = useRef<NotificationActions>(null);
    const [refState, setRefState] = useState<NotificationActions>(
      {} as NotificationActions,
    );

    useEffect(() => {
      if (toastRef.current) {
        setRefState(toastRef.current);
        NotificationManager.register(toastRef.current);
      }
    }, []);

    return (
      <NotificationContext.Provider value={refState}>
        {children}
        <Notification ref={toastRef} {...props} />
      </NotificationContext.Provider>
    );
  },
);
