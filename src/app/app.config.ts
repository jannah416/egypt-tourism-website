import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideStore } from '@ngrx/store';

import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { EgyptDayToursComponent } from './pages/egypt-day-tours/egypt-day-tours.component';
import { LoginComponent } from './pages/login/login.component';
import { WhereToGoComponent } from './pages/where-to-go/where-to-go.component';
import { GoCairoComponent } from './pages/go-cairo/go-cairo.component';
import { PyramidsTourComponent } from './pages/go-cairo/pyramids-tour/pyramids-tour.component';
import { GoLuxorComponent } from './pages/go-luxor/go-luxor.component';
import { EastWestTourComponent } from './pages/go-luxor/east-west-tour/east-west-tour.component';
import { GoSharmComponent } from './pages/go-sharm/go-sharm.component';
import { AquaParkTourComponent } from './pages/go-sharm/aqua-park-tour/aqua-park-tour.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'egypt-day-tours',
    component: EgyptDayToursComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'where-to-go',
    component: WhereToGoComponent,
  },

  {
    path: 'go-cairo',
    component: GoCairoComponent,
  },
  {
    path: 'pyramids-tour',
    component: PyramidsTourComponent,
  },
  {
    path: 'go-luxor',
    component: GoLuxorComponent,
  },
  {
    path: 'east-west-tour',
    component: EastWestTourComponent,
  },
  {
    path: 'go-sharm',
    component: GoSharmComponent,
  },
  {
    path: 'aqua-park-tour',
    component: AquaParkTourComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
  ],
};
