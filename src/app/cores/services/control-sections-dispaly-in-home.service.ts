import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlSectionsDispalyInHomeService {
  isGreenBTNClicked = signal(false);
  constructor() { }
  setGreenBTNFlag() {
    this.isGreenBTNClicked.set(true);
  }
}
