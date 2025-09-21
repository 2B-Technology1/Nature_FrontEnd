import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private translate = inject(TranslateService);

  language = signal(localStorage.getItem('language') || 'en');
  constructor() { }
  changeLanguage(lang: string) {
    this.language.set(lang);
    localStorage.setItem("language", lang);
    this.translate.use(lang);
  }
}
