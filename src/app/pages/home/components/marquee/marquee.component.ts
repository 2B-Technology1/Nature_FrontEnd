import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-marquee',
  imports: [CarouselModule, CommonModule],
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss'
})
export class MarqueeComponent {
  // @Input() items: string[] = [];

  // rtl = signal(false);

  // carouselOptions = signal<OwlOptions>({
  //   loop: true,
  //   autoplay: true,
  //   autoplayTimeout: 4000,
  //   autoplaySpeed: 1000,
  //   dots: false,
  //   nav: false,
  //   rtl: this.rtl(),
  //   responsive: {
  //     0: { items: 1 },
  //     600: { items: 2 },
  //     1000: { items: 6 }
  //   }
  // });

  // constructor() {
  //   this.toggleDirection();
  // }

  // private toggleDirection() {
  //   this.rtl.update(v => !v);
  //   setInterval(() => {
  //     this.carouselOptions.update(opt => ({
  //       ...opt,
  //       rtl: this.rtl()
  //     }));
  //   }, 4000);
  // }



}
