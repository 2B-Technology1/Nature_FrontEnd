import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { PartnersTemplate } from '../../interfaces/partners-template';
import { LanguageService } from '../language.service';

@Injectable({
  providedIn: 'root'
})
export class PartnersService extends BaseService {
  partners!: PartnersTemplate[];

  partners_en!: PartnersTemplate[];
  partners_ar!: PartnersTemplate[];

  constructor(http: HttpClient, language: LanguageService) {
    super(http, language);
  }
}
