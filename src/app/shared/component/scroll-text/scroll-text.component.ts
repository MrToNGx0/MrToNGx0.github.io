import { AfterViewInit, Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-scroll-text',
  templateUrl: './scroll-text.component.html',
  styleUrls: ['./scroll-text.component.scss'],
})
export class ScrollTextComponent implements AfterViewInit {
  @Input() text = '';
  private observer!: IntersectionObserver;
  private words: string[] = [];
  private visibleWordIndex = 0;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit() {
    this.words = this.text.split(' ');
    this.renderWords();
    this.initObserver();
  }

  private initObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.addEventListener('scroll', this.onScroll);
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '0px 0px -50% 0px',
      },
    );

    this.observer.observe(this.el.nativeElement);
  }

  private onScroll = () => {
    const increment = Math.floor(window.scrollY / 100);

    if (increment > this.visibleWordIndex) {
      this.visibleWordIndex = increment;
      this.updateWordVisibility();
    }
  };

  private renderWords() {
    const paragraph = this.el.nativeElement.querySelector('p');
    paragraph.innerHTML = '';

    this.words.forEach((word: string) => {
      const span = this.renderer.createElement('span');
      this.renderer.appendChild(paragraph, span);
      span.innerText = word + ' ';
      this.renderer.setStyle(span, 'opacity', '0');
    });
  }

  private updateWordVisibility() {
    const paragraph = this.el.nativeElement.querySelector('p');
    const spans = paragraph.querySelectorAll('span');

    spans.forEach((span: HTMLElement, index: number) => {
      if (index < this.visibleWordIndex) {
        this.renderer.setStyle(span, 'opacity', '1');
      }
    });
  }
}
