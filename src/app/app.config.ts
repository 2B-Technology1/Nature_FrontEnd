import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { NgwWowModule, NgwWowService } from 'ngx-wow';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideTranslateService, provideTranslateLoader } from "@ngx-translate/core";
import { provideTranslateHttpLoader } from "@ngx-translate/http-loader";
import { loaderInterceptor } from './cores/interceptors/loader.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(withInterceptors([loaderInterceptor])), provideAnimations(), { provide: NgwWowModule, useValue: NgwWowModule }, NgwWowService, provideHttpClient(),
  provideTranslateService({
    loader: provideTranslateHttpLoader({
      prefix: 'assets/i18n/',
      suffix: '.json'
    }),
    fallbackLang: localStorage.getItem('language') || 'en',
  }),
  ]
};
