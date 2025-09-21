import { AfterViewInit, Component, Input, signal } from '@angular/core';
import { ImpactCardTemplate } from '../../../../cores/interfaces/impact-card-template';
import { ImpactTemplate } from '../../../../cores/interfaces/impact-template';
import { FallBackMediaService } from '../../../../cores/services/fall-back-media.service';

@Component({
  selector: 'app-impact-card',
  imports: [],
  templateUrl: './impact-card.component.html',
  styleUrl: './impact-card.component.scss'
})
export class ImpactCardComponent implements AfterViewInit {

  constructor(public fallbackLogo: FallBackMediaService) { }


  ngAfterViewInit(): void {
    this.updateCounter()
  }
  @Input({ required: true }) card!: ImpactTemplate;
  cardCounter = signal(0);
  counterIntervalId = setInterval(() => this.updateCounter(), 10)

  updateCounter() {
    this.cardCounter.update(curr => ++curr);
    if (this.cardCounter() <= this.card.impactNumber) {
      this.counterIntervalId;
    } else {
      clearInterval(this.counterIntervalId)
    }
  }

  onDestroy() {
    clearInterval(this.counterIntervalId)
  }
}
