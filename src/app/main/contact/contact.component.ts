import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/core/services/language/language.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import {
  LOCAL_STORAGE_KEYS,
  RESPONSE_TYPE,
} from 'src/app/core/constants/constants';
import { Profile } from 'src/app/core/models/profile.interface';

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
    private profileService: ProfileService,
    private notificationService: NotificationService,
    private titleService: Title,
    private translate: TranslateService,
    private languageService: LanguageService,
  ) {}

  ngOnInit(): void {
    this.languageService.getSelectedLanguage().subscribe(async (language) => {
      this.translate.get('nav.contact').subscribe((tabName: string) => {
        this.titleService.setTitle(`MrToNG | ${tabName}`);
      });

      this.translate.setDefaultLang(language.language_code.toLowerCase());
      const [resultProfile] = await Promise.all([
        this.profileService
          .getProfile(language.language_code.toLowerCase())
          .toPromise(),
      ]);

      this.profile = resultProfile.data;
    });
  }

  onClickCopy(input: string) {
    this.notificationService.show(
      RESPONSE_TYPE.Success,
      'notification.message.copyToClipboard',
    );
    navigator.clipboard.writeText(input);
  }
}
