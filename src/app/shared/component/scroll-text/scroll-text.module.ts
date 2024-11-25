import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollTextComponent } from './scroll-text.component';



@NgModule({
  declarations: [
    ScrollTextComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ScrollTextComponent]
})
export class ScrollTextModule { }
