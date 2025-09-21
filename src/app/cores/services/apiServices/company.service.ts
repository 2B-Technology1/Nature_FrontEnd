import { Injectable, signal } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { CompanyTemplate } from '../../interfaces/company-template';
import { LanguageService } from '../language.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends BaseService {

  companies!: CompanyTemplate[];

  companies_en!: CompanyTemplate[];
  companies_ar!: CompanyTemplate[];

  constructor(http: HttpClient, language: LanguageService) {
    super(http, language);
  }
}
