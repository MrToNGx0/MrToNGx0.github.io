import { Component } from '@angular/core';
import { faCookie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss'],
})
export class CookieConsentComponent {
  consentGiven = false;
  faCookie = faCookie;

  acceptCookies(): void {
    this.consentGiven = true;
    localStorage.setItem('cookieConsent', 'true');
  }

  declineCookies(): void {
    this.consentGiven = true;
    localStorage.setItem('cookieConsent', 'false');
  }

  ngOnInit(): void {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'true') {
      this.consentGiven = true;
    }
  }
}
