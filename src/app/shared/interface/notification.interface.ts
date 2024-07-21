import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { NotificationTypeEnum, NotificationMessageEnum } from '../emun/notification-enum';

export interface NotificationIcon {
  label: NotificationTypeEnum;
  icon: IconDefinition;
  class: string;
}

export interface Notification {
  icon: IconDefinition;
  message: NotificationMessageEnum;
  class: string;
  [key: string]: any;
}
