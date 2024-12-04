import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieConsentComponent } from './cookie-consent.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CookieConsentComponent],
  imports: [CommonModule, FontAwesomeModule, TranslateModule],
  exports: [CookieConsentComponent],
})
export class CookieConsentModule {}
