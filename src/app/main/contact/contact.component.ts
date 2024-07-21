import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from 'src/app/core/service/notification/notification.service';
import { UserService } from 'src/app/core/service/user/user.service';
import {
  NotificationMessageEnum,
  NotificationTypeEnum,
} from 'src/app/shared/emun/notification-enum';
import { Profile } from 'src/app/shared/interface/profile.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  profile!: Profile;
  class = 'scale-[1.7]';

  faEnvelope = faEnvelope;
  faPhone = faPhone;

  constructor(
    private userService: UserService,
    private notificationService: NotificationService,
    private titleService: Title,
    private translate: TranslateService
  ) {
    this.translate.get('nav.contact').subscribe((tabName: string) => {
      this.titleService.setTitle(`MrToNG | ${tabName}`);
    });
  }

  async ngOnInit(): Promise<void> {
    this.profile = await this.userService.getProfile().toPromise();
  }

  onClickCopy(input: string) {
    this.notificationService.show(
      NotificationTypeEnum.Success,
      NotificationMessageEnum.CopiedToClipboard
    );
    navigator.clipboard.writeText(input);
  }
}
