import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/core/service/language/language.service';
import { ProfileService } from 'src/app/core/service/profile/profile.service';
import { LanguageEnum } from 'src/app/shared/emun/language-enum';
import { Education } from 'src/app/shared/interface/education.interface';
import { Experience } from 'src/app/shared/interface/experience.interface';
import { Profile } from 'src/app/shared/interface/profile.interface';
import { Skill } from 'src/app/shared/interface/skill.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  profile!: Profile;
  skills: Skill[] = [];
  experiences: Experience[] = [];
  educations: Education[] = [];
  totalDuration!: string;
  languageCode = '';
  sliderOffset = 0;
  slideWidth = 250 + 24;

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  constructor(
    private profileService: ProfileService,
    private titleService: Title,
    private translate: TranslateService,
    private languageService: LanguageService,
  ) {
    this.translate.get('nav.about').subscribe((tabName: string) => {
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
      this.skills = await this.profileService
        .getSkill(language.language_code.toLowerCase())
        .toPromise();
      this.experiences = await this.profileService
        .getExperience(language.language_code.toLowerCase())
        .toPromise();
      this.educations = await this.profileService
        .getEducation(language.language_code.toLowerCase())
        .toPromise();
      this.calculateDurations();
      this.calculateTotalDuration();
    });
  }

  calculateDurations(): void {
    this.experiences.forEach((experience) => {
      const start = new Date(experience.startDate);
      const end = experience.endDate
        ? new Date(experience.endDate)
        : new Date();
      const duration = this.calculateDuration(start, end);
      experience.duration = duration;
    });
  }

  calculateTotalDuration(): void {
    let totalDays = 0;
    this.experiences.forEach((experience) => {
      const start = new Date(experience.startDate);
      const end = experience.endDate
        ? new Date(experience.endDate)
        : new Date();
      totalDays += this.calculateDays(start, end);
    });
    this.totalDuration = this.formatDuration(totalDays);
  }

  calculateDuration(start: Date, end: Date): string {
    const days = this.calculateDays(start, end);
    return this.formatDuration(days);
  }

  calculateDays(start: Date, end: Date): number {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((end.getTime() - start.getTime()) / oneDay));
  }

  formatDuration(totalDays: number): string {
    const years = Math.floor(totalDays / 365);
    const months = Math.floor((totalDays % 365) / 30);
    const days = (totalDays % 365) % 30;
    return `${years} years, ${months} months, ${days} days`;
  }

  prevSlide() {
    this.sliderOffset += this.slideWidth;
    if (this.sliderOffset > 0) {
      this.sliderOffset = -this.slideWidth * (this.skills.length - 1);
    }
  }

  nextSlide() {
    this.sliderOffset -= this.slideWidth;
    if (this.sliderOffset < -this.slideWidth * (this.skills.length - 1)) {
      this.sliderOffset = 0;
    }
  }
}
