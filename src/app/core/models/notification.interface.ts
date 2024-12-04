import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface NotificationIcon {
  label: string;
  icon: IconDefinition;
  class: string;
}

export interface Notification {
  icon: IconDefinition;
  message: string;
  class: string;
  [key: string]: any;
}
