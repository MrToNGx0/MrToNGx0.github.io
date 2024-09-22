import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToTopComponent } from './scroll-to-top.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ScrollToTopComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ScrollToTopComponent]
})

export class ScrollToTopModule {}
