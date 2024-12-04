import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LanguageService } from './core/services/language/language.service';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { NotificationModule } from './shared/component/notification/notification.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NotificationService } from './core/services/notification/notification.service';
import { ThemeService } from './core/services/theme/theme.service';
import { RatingComponent } from './shared/modal/rating/rating.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoggingInterceptor } from './core/interceptor/logging/logging.interceptor';
import { ErrorInterceptor } from './core/interceptor/error/error.interceptor';
import { CookieConsentComponent } from './shared/component/cookie-consent/cookie-consent.component';
import { CookieConsentModule } from './shared/component/cookie-consent/cookie-consent.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, RatingComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatDialogModule,
    HttpClientModule,
    NotificationModule,
    CookieConsentModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    LanguageService,
    NotificationService,
    ThemeService,
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
