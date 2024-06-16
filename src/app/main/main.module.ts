import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../shared/component/navbar/navbar.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    NavbarModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent,
        children: [
          {
            path: 'home',
            loadChildren: () =>
              import('./home/home.module').then(m => m.HomeModule),
          },
          {
            path: 'about',
            loadChildren: () =>
              import('./about/about.module').then(m => m.AboutModule),
          },
          {
            path: 'contact',
            loadChildren: () =>
              import('./contact/contact.module').then(m => m.ContactModule),
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
