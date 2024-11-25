import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollTextModule } from 'src/app/shared/component/scroll-text/scroll-text.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TranslateModule,
    ScrollTextModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
})
export class HomeModule {}
