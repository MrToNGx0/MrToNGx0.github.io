import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/core/services/language/language.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import { LOCAL_STORAGE_KEYS } from 'src/app/core/constants/constants';
import { Education } from 'src/app/core/models/education.interface';
import { Experience } from 'src/app/core/models/experience.interface';
import { Profile } from 'src/app/core/models/profile.interface';
import { Skill } from 'src/app/core/models/skill.interface';

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
  sliderOffset = 0;
  slideWidth = 250 + 24;

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  constructor(
    private profileService: ProfileService,
    private titleService: Title,
    private translate: TranslateService,
    private languageService: LanguageService,
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    this.languageService.getSelectedLanguage().subscribe(async (language) => {
      this.translate.get('nav.about').subscribe((tabName: string) => {
        this.titleService.setTitle(`MrToNG | ${tabName}`);
      });

      this.translate.setDefaultLang(language.language_code.toLowerCase());
      const [resultProfile, resultSkill, resultExperience, resultEducation] =
        await Promise.all([
          this.profileService
            .getProfile(language.language_code.toLowerCase())
            .toPromise(),
          this.profileService
            .getSkill(language.language_code.toLowerCase())
            .toPromise(),
          this.profileService
            .getExperience(language.language_code.toLowerCase())
            .toPromise(),
          this.profileService
            .getEducation(language.language_code.toLowerCase())
            .toPromise(),
        ]);

      this.profile = resultProfile.data;
      this.skills = resultSkill.data;
      this.experiences = resultExperience.data;
      this.educations = resultEducation.data;

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
      experience.startDate = start.toLocaleDateString('en-GB');
      experience.endDate = end.toLocaleDateString('en-GB');

      const duration = this.calculateDuration(start, end);
      experience.duration = duration;
    });

    this.educations.forEach((education) => {
      const start = new Date(education.startDate);
      const end = education.endDate ? new Date(education.endDate) : new Date();

      education.startDate = start.toLocaleDateString('en-GB');
      education.endDate = end.toLocaleDateString('en-GB');
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

  getYear(date: string): string {
    const parsedDate = new Date(date);
    return parsedDate.getFullYear().toString();
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
