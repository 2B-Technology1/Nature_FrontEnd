import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AboutCardTemplate } from '../../../../cores/interfaces/about-card-template';
import { CommonModule } from '@angular/common';
import { JumpInButtonComponent } from "../jump-in-button/jump-in-button.component";
import { CompanyTemplate } from '../../../../cores/interfaces/company-template';
import { BaseStorageUrl } from '../../../../enviroments/env.dev';
import { FallBackMediaService } from '../../../../cores/services/fall-back-media.service';
import { LanguageService } from '../../../../cores/services/language.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-card',
  imports: [CommonModule, JumpInButtonComponent, TranslatePipe],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.scss'
})
export class AboutCardComponent {
  constructor(public mediaError: FallBackMediaService, public language: LanguageService) { }
  baseStorageUrl = BaseStorageUrl;
  @Input({ required: true }) card!: CompanyTemplate;
  // @Input() card!: AboutCardTemplate;
  @Input({ required: true }) otherInfo!: { cardIndex: number; numOfCards: number };
  @Input({ required: true }) centerIndex!: number;
  @Output() select = new EventEmitter<number>();

  getPositionClass(): string {
    const n = this.otherInfo.numOfCards;
    const leftIndex = (this.centerIndex - 1 + n) % n;
    const rightIndex = (this.centerIndex + 1) % n;
    if (this.otherInfo.cardIndex === this.centerIndex) return 'center';
    if (this.otherInfo.cardIndex === leftIndex) return 'left';
    if (this.otherInfo.cardIndex === rightIndex) return 'right';
    return 'hidden';
  }

  handleSelectCard() {
    this.select.emit(this.otherInfo.cardIndex);
  }
}
