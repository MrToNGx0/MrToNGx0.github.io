import { Component } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
import { Notification } from '../../../core/models/notification.interface';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  faTimes = faTimes;

  constructor(public notificationService: NotificationService) {}

  onClickRemoveNotification(notification: Notification) {
    this.notificationService.remove(notification);
  }
}
