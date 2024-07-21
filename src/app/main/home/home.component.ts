import { Component, OnInit } from '@angular/core';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/core/service/language/language.service';
import { UserService } from 'src/app/core/service/user/user.service';
import { RatingComponent } from 'src/app/shared/modal/rating/rating.component';
import { Profile } from 'src/app/shared/interface/profile.interface';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

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

  constructor(
    private userService: UserService,
    private languageService: LanguageService,
    private translate: TranslateService,
    private dialog: MatDialog,
    private titleService: Title
  ) {
    this.translate.get('nav.home').subscribe((tabName: string) => {
      this.titleService.setTitle(`MrToNG | ${tabName}`);
    });
    this.languageService.getSelectedLanguage().subscribe(language => {
      this.translate.setDefaultLang(language.value.toLowerCase());
    });
  }

  async ngOnInit(): Promise<void> {
    this.profile = await this.userService.getProfile().toPromise();
  }

  openModal(): void {
    const dialogRef = this.dialog.open(RatingComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed with result:', result);
    });
  }
}
