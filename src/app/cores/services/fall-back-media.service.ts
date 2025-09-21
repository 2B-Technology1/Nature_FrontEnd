import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FallBackMediaService {
  errorInVedio = signal<boolean>(false);
  constructor() { }

  handleErrorInImage(e: any, fallBackMeiaUrl: string) {
    e.target.src = fallBackMeiaUrl;
  }
  handleVedioError() {
    this.errorInVedio.update(curr => !curr);
  }
}
