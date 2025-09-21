import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiUrl } from '../../../enviroments/env.dev';
import { LanguageService } from '../language.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  endPoint: string = '';
  constructor(private http: HttpClient, private language: LanguageService) { }
  headers = new HttpHeaders();

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Accept-Language': this.language.language() || 'en'
    });
  }

  set setEndPoint(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll(): Observable<any> {
    return this.http.get(`${BaseApiUrl}/${this.endPoint}`, { headers: this.getHeaders() });
  }
  getById(id: string): Observable<any> {
    return this.http.get(`${BaseApiUrl}/${this.endPoint}/${id}`, { headers: this.getHeaders() });
  }
}
