/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {AppComponent} from './app/app.component';
import {provideRouter} from '@angular/router';
import routeConfig from './app/routes';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideProtractorTestingSupport(), 
    provideRouter(routeConfig),
    importProvidersFrom(HttpClientModule), 
    provideOAuthClient()],
}).catch((err) => console.error(err));
