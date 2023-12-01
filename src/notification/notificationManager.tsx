import { NotificationActions } from './NotificationActions';

class NotificationManager implements NotificationActions {
  private notificationInstance: NotificationActions | null = null;

  show = this.notificationInstance?.show ?? (() => '');
  update = this.notificationInstance?.update ?? (() => {});
  hide = this.notificationInstance?.hide ?? ((_id: string) => {});

  hideAll = this.notificationInstance?.hideAll ?? (() => {});
  isOpen = this.notificationInstance?.isOpen ?? ((_id: string) => false);

  register(instance: NotificationActions) {
    this.notificationInstance = instance;
  }

  unRegister() {
    this.notificationInstance = null;
  }
}

export default new NotificationManager();
