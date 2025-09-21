import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { CountryTemplate } from '../../interfaces/country-template';
import { LanguageService } from '../language.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends BaseService {
  country!: CountryTemplate;

  country_en!: CountryTemplate;
  country_ar!: CountryTemplate;

  constructor(http: HttpClient, language: LanguageService) {
    super(http, language);
  }
}
