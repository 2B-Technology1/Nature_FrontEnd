import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sections-title',
  imports: [CommonModule],
  templateUrl: './sections-title.component.html',
  styleUrl: './sections-title.component.scss'
})
export class SectionsTitleComponent {
  @Input({ required: true }) isAnimated!: boolean;
  @Input() animationDir: 'up' | 'down' = 'up';
}
