import { Component, computed, Input, signal } from '@angular/core';
import { ExploreCardTemplate } from '../../../../cores/interfaces/explore-card-template';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-explore-card',
  imports: [CommonModule],
  templateUrl: './explore-card.component.html',
  styleUrl: './explore-card.component.scss'
})
export class ExploreCardComponent {
  @Input({ required: true }) card!: ExploreCardTemplate;
  isShowMore = signal(false);
  firstClickOnShowBtn = signal(0);
  handleShowMore() {
    this.isShowMore.update(curr => !curr);
    this.firstClickOnShowBtn.update(curr => ++curr);
  }
}
