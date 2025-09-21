import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { ThemeTemplate } from '../../interfaces/theme-template';
import { LanguageService } from '../language.service';

@Injectable({
  providedIn: 'root'
})
export class ThemesService extends BaseService {
  Themes!: ThemeTemplate;
  Themes_en!: ThemeTemplate;
  Themes_ar!: ThemeTemplate;

  constructor(http: HttpClient, language: LanguageService) {
    super(http, language);
  }
}
