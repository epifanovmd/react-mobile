import { NotificationActions } from './Notification';

class NotificationManager implements NotificationActions {
  private notificationInstance: NotificationActions | null = null;

  show: NotificationActions['show'] = (...args) => {
    return this.notificationInstance?.show(...args) || '';
  };
  update: NotificationActions['update'] = (...args) => {
    this.notificationInstance?.update(...args);
  };
  hide: NotificationActions['hide'] = (...args) => {
    this.notificationInstance?.hide(...args);
  };

  hideAll: NotificationActions['hideAll'] = () => {
    this.notificationInstance?.hideAll();
  };
  isOpen: NotificationActions['isOpen'] = (...args) => {
    return !!this.notificationInstance?.isOpen(...args);
  };

  register(instance: NotificationActions) {
    this.notificationInstance = instance;
  }

  unRegister() {
    this.notificationInstance = null;
  }
}

export const notificationManager = new NotificationManager();
