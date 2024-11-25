import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  previousScrollY = 0;
  navbarVisible = true;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const currentScrollY = window.scrollY;

    this.navbarVisible =
      currentScrollY < this.previousScrollY || currentScrollY <= 0;

    this.previousScrollY = currentScrollY;
  }
}
