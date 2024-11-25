import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/core/service/language/language.service';
import { NotificationService } from 'src/app/core/service/notification/notification.service';
import { ProfileService } from 'src/app/core/service/profile/profile.service';
import { LanguageEnum } from 'src/app/shared/emun/language-enum';
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
  languageCode = '';

  faEnvelope = faEnvelope;
  faPhone = faPhone;

  constructor(
    private profileService: ProfileService,
    private notificationService: NotificationService,
    private titleService: Title,
    private translate: TranslateService,
    private languageService: LanguageService,
  ) {
    this.translate.get('nav.contact').subscribe((tabName: string) => {
      this.titleService.setTitle(`MrToNG | ${tabName}`);
    });
    this.languageCode =
      localStorage.getItem(LanguageEnum.referenceKey)?.toLowerCase() ?? 'en';
  }

  ngOnInit(): void {
    this.languageService.getSelectedLanguage().subscribe(async (language) => {
      this.translate.setDefaultLang(language.language_code.toLowerCase());
      this.profile = await this.profileService
        .getProfile(language.language_code.toLowerCase())
        .toPromise();
    });
  }

  onClickCopy(input: string) {
    this.notificationService.show(
      NotificationTypeEnum.Success,
      NotificationMessageEnum.CopiedToClipboard,
    );
    navigator.clipboard.writeText(input);
  }
}
