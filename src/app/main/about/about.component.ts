import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/core/service/user/user.service';
import { Education } from 'src/app/shared/interface/education.interface';
import { Experience } from 'src/app/shared/interface/experience.interface';
import { Profile } from 'src/app/shared/interface/profile.interface';
import { Skill } from 'src/app/shared/interface/skill.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
  profile!: Profile;
  skills!: Skill[];
  experiences!: Experience[];
  educations!: Education[];
  totalDuration!: string;
  currentTransform = 0;
  interval: any;

  constructor(
    private userService: UserService,
    private titleService: Title,
    private translate: TranslateService
  ) {
    this.translate.get('nav.about').subscribe((tabName: string) => {
      this.titleService.setTitle(`MrToNG | ${tabName}`);
    });
    this.titleService.setTitle('MrToNG | About');
  }

  async ngOnInit(): Promise<void> {
    this.profile = await this.userService.getProfile().toPromise();
    this.skills = await this.userService.getSkill().toPromise();
    this.experiences = await this.userService.getExperience().toPromise();
    this.educations = await this.userService.getEducation().toPromise();
    this.calculateDurations();
    this.calculateTotalDuration();
    this.startCarousel();
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  calculateDurations(): void {
    this.experiences.forEach(experience => {
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
    this.experiences.forEach(experience => {
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

  startCarousel() {
    this.interval = setInterval(() => {
      this.scrollCarousel();
    }, 50);
  }

  stopCarousel() {
    clearInterval(this.interval);
  }

  scrollCarousel() {
    const carouselContent = document.querySelector(
      '.carousel-content'
    ) as HTMLElement;
    this.currentTransform -= 2;
    if (Math.abs(this.currentTransform) >= carouselContent.scrollWidth / 2) {
      this.currentTransform = 0;
    }
    carouselContent.style.transform = `translateX(${this.currentTransform}px)`;
  }
}
