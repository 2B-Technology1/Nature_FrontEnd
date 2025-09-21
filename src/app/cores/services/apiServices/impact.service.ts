import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { ImpactTemplate } from '../../interfaces/impact-template';
import { LanguageService } from '../language.service';

@Injectable({
  providedIn: 'root'
})
export class ImpactService extends BaseService {
  impact!: ImpactTemplate[];

  impact_en!: ImpactTemplate[];
  impact_ar!: ImpactTemplate[];
  constructor(http: HttpClient, language: LanguageService) {
    super(http, language);
  }
}
