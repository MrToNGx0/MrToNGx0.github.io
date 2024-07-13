import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { NotificationType, NotificationMessage } from '../emun/notification';

export interface NotificationIcon {
  label: NotificationType;
  icon: IconDefinition;
  class: string;
}

export interface Notification {
  icon: IconDefinition;
  message: NotificationMessage;
  class: string;
  [key: string]: any;
}
