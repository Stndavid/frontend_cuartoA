import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
//import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  //providers: [provideRouter(routes), provideHttpClient(withFetch())]
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(BrowserModule),importProvidersFrom(BrowserAnimationsModule)]

 

};
