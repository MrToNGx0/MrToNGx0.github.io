import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LanguageService } from './core/service/language/language.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './core/service/user/user.service';
import { NotificationModule } from './shared/component/notification/notification.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NotificationService } from './core/service/notification/notification.service';
import { ThemeService } from './core/service/theme/theme.service';
import { RatingComponent } from './shared/modal/rating/rating.component';
import { MatDialogModule } from '@angular/material/dialog';

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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [LanguageService, UserService, NotificationService, ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
