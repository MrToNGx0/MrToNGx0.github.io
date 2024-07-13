import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule, TranslateModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
