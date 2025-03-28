import { useContext } from "react";

import { NotificationContext } from "./NotificationProvider";

export const useNotification = () => {
  const notification = useContext(NotificationContext);

  if (!notification) {
    throw new Error("NotificationContext is not provided");
  }

  return notification;
};
