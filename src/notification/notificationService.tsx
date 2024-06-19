import { NotificationActions } from "./Notification";

class NotificationService implements NotificationActions {
  private notificationInstance: NotificationActions | null = null;

  show: NotificationActions["show"] = (...args) => {
    return this.notificationInstance?.show(...args) || "";
  };
  update: NotificationActions["update"] = (...args) => {
    this.notificationInstance?.update(...args);
  };

  hide: NotificationActions["hide"] = () => {
    return this.notificationInstance?.hide() ?? Promise.resolve();
  };

  register(instance: NotificationActions) {
    this.notificationInstance = instance;
  }

  unRegister() {
    this.notificationInstance = null;
  }
}

export const notificationService = new NotificationService();
