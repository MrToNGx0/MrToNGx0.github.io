import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { NavbarModule } from '../shared/component/navbar/navbar.module';
import { ScrollToTopModule } from '../shared/component/scroll-to-top/scroll-to-top.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    NavbarModule,
    ScrollToTopModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent,
        children: [
          {
            path: 'home',
            loadChildren: () =>
              import('./home/home.module').then((m) => m.HomeModule),
          },
          {
            path: 'about',
            loadChildren: () =>
              import('./about/about.module').then((m) => m.AboutModule),
          },
          {
            path: 'contact',
            loadChildren: () =>
              import('./contact/contact.module').then((m) => m.ContactModule),
          },
          {
            path: '**',
            redirectTo: 'home',
          },
        ],
      },
    ]),
  ],
})
export class MainModule {}
