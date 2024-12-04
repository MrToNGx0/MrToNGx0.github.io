import { Injectable } from '@angular/core';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckCircle,
  faExclamationCircle,
  faTimesCircle,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { NOTIFICATION_ICONS } from 'src/app/core/constants/constants';
import {
  Notification,
  NotificationIcon,
} from 'src/app/core/models/notification.interface';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notifications: Notification[] = [];
  private icons: NotificationIcon[] = NOTIFICATION_ICONS;

  constructor(private translateService: TranslateService) {}

  show(type: string, message: string, options: any = {}): void {
    const item = this.icons.find((item) => item.label === type);

    if (item) {
      this.translateService
        .get(message)
        .subscribe((translateMessage: string) => {
          const notification: Notification = {
            icon: item.icon,
            message: translateMessage,
            class: item.class,
            ...options,
          };
          this.notifications.push(notification);
          setTimeout(() => this.remove(notification), options.duration || 5000);
        });
    }
  }

  remove(notification: Notification): void {
    this.notifications = this.notifications.filter((n) => n !== notification);
  }

  getNotifications(): Notification[] {
    return this.notifications;
  }
}
