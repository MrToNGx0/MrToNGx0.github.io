import { Component, OnInit } from '@angular/core';
import { faLink, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/core/services/language/language.service';
import { RatingComponent } from 'src/app/shared/modal/rating/rating.component';
import { Profile } from 'src/app/core/models/profile.interface';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import { Project } from 'src/app/core/models/project.interface';
import { LOCAL_STORAGE_KEYS } from 'src/app/core/constants/constants';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  profile!: Profile;
  class = 'scale-[1.7]';
  showRating = true;

  faLink = faLink;
  faShareSquare = faShareSquare;
  faGithub = faGithub;

  projects: Project[] = [];

  constructor(
    private profileService: ProfileService,
    private languageService: LanguageService,
    private translate: TranslateService,
    private dialog: MatDialog,
    private titleService: Title,
  ) {}

  ngOnInit(): void {
    this.languageService.getSelectedLanguage().subscribe(async (language) => {
      this.translate.get('nav.home').subscribe((tabName: string) => {
        this.titleService.setTitle(`MrToNG | ${tabName}`);
      });

      this.translate.setDefaultLang(language.language_code.toLowerCase());
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
