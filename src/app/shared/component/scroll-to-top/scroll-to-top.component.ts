import { Component, HostListener } from '@angular/core';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
})
export class ScrollToTopComponent {
  showScroll!: boolean;
  showScrollHeight = 200;
  hideScrollHeight = 200;

  faChevronCircleUp = faChevronCircleUp;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) > this.showScrollHeight
    ) {
      this.showScroll = true;
    } else if (
      this.showScroll &&
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) < this.hideScrollHeight
    ) {
      this.showScroll = false;
    }
  }

  scrollToTop() {
    const scrollStep = 30;
    const currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
      window.requestAnimationFrame(
        this.smoothScroll.bind(this, currentScroll, scrollStep),
      );
    }
  }

  smoothScroll(currentScroll: number, scrollStep: number) {
    if (currentScroll > 0) {
      window.scrollTo(0, currentScroll - scrollStep);
      window.requestAnimationFrame(
        this.smoothScroll.bind(this, currentScroll - scrollStep, scrollStep),
      );
    }
  }
}
