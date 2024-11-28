import { Component, OnInit } from '@angular/core';
import { faLink, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/core/service/language/language.service';
import { RatingComponent } from 'src/app/shared/modal/rating/rating.component';
import { Profile } from 'src/app/shared/interface/profile.interface';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { ProfileService } from 'src/app/core/service/profile/profile.service';
import { LanguageEnum } from 'src/app/shared/emun/language-enum';
import { Project } from 'src/app/shared/interface/project.interface';
import { NotificationService } from 'src/app/core/service/notification/notification.service';
import {
  NotificationMessageEnum,
  NotificationTypeEnum,
} from 'src/app/shared/emun/notification-enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  profile!: Profile;
  class = 'scale-[1.7]';
  languageCode = '';
  showRating = true;

  faLink = faLink;
  faShareSquare = faShareSquare;

  projects: Project[] = [];

  constructor(
    private profileService: ProfileService,
    private languageService: LanguageService,
    private translate: TranslateService,
    private dialog: MatDialog,
    private titleService: Title,
    private notificationService: NotificationService,
  ) {
    this.translate.get('nav.home').subscribe((tabName: string) => {
      this.titleService.setTitle(`MrToNG | ${tabName}`);
    });
    this.languageCode =
      localStorage.getItem(LanguageEnum.referenceKey)?.toLowerCase() ?? 'en';
  }

  ngOnInit(): void {
    this.languageService.getSelectedLanguage().subscribe(async (language) => {
      this.translate.setDefaultLang(language.language_code.toLowerCase());
      try {
        const [resultProfile, resultProject] = await Promise.all([
          this.profileService
            .getProfile(language.language_code.toLowerCase())
            .toPromise(),
          this.profileService
            .getProject(language.language_code.toLowerCase())
            .toPromise(),
        ]);

        this.profile = resultProfile.data;
        this.projects = resultProject.data;
      } catch (error) {
        this.notificationService.show(
          NotificationTypeEnum.Error,
          NotificationMessageEnum.ErrorInternalServer,
        );
      }
    });
  }

  openModal(): void {
    const dialogRef = this.dialog.open(RatingComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed with result:', result);
    });
  }
}
