import { Injectable } from '@angular/core';
import {
  faCheckCircle,
  faExclamationCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  NotificationMessage,
  NotificationType,
} from 'src/app/shared/emun/notification';
import {
  Notification,
  NotificationIcon,
} from 'src/app/shared/interface/notification.interface';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notifications: Notification[] = [];
  private icons: NotificationIcon[] = [
    {
      label: NotificationType.Success,
      icon: faCheckCircle,
      class:
        'text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200',
    },
    {
      label: NotificationType.Warning,
      icon: faExclamationCircle,
      class:
        'text-yellow-500 bg-yellow-100 dark:bg-yellow-800 dark:text-yellow-200',
    },
    {
      label: NotificationType.Error,
      icon: faTimesCircle,
      class: 'text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200',
    },
  ];

  show(
    type: NotificationType,
    message: NotificationMessage,
    options: any = {}
  ): void {
    const item = this.icons.find(item => item.label === type);

    if (item) {
      const notification: Notification = {
        icon: item.icon,
        message,
        class: item.class,
        ...options,
      };
      this.notifications.push(notification);
      setTimeout(() => this.remove(notification), options.duration || 5000);
    } else {
      console.error(`Icon with type '${type}' not found.`);
    }
  }

  remove(notification: Notification): void {
    this.notifications = this.notifications.filter(n => n !== notification);
  }

  getNotifications(): Notification[] {
    return this.notifications;
  }
}
