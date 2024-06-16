import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
