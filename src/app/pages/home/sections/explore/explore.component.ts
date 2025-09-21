import { Component, signal } from '@angular/core';
import { SectionsTitleComponent } from "../../../../shared/sections-title/sections-title.component";
import { ExploreCardComponent } from '../../components/explore-card/explore-card.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ThemesService } from '../../../../cores/services/apiServices/themes.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-explore',
  imports: [SectionsTitleComponent, ExploreCardComponent, CarouselModule, TranslatePipe],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent {

  constructor(public themes: ThemesService) { }

  ngOnInit() {
    this.themes.setEndPoint = 'themes';
    this.themes.getAll().subscribe({
      next: (res) => { console.log(res) },
      error: (err) => { console.log(err) }
    })
  };

  exploreCards = [
    {
      id: 1,
      bgSrc: "assets/images/pages/explore/explore-1.jpg",
      title: "Marine Conservation",
      content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis quas odit aperiam libero veniam quidem saepe odio corrupti aliquam at ex, doloribus tempore. Repudiandae, optio. In vero consequuntur maxime."
    },
    {
      id: 2,
      bgSrc: "assets/images/pages/explore/explore-2.jpg",
      title: "Renewable Energy",
      content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis quas odit aperiam libero veniam quidem saepe odio corrupti aliquam at ex, doloribus tempore. Repudiandae, optio. In vero consequuntur maxime."
    },
    {
      id: 3,
      bgSrc: "assets/images/pages/explore/explore-3.jpg",
      title: "Mangrove Forests",
      content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis quas odit aperiam libero veniam quidem saepe odio corrupti aliquam at ex, doloribus tempore. Repudiandae, optio. In vero consequuntur maxime."
    },
    {
      id: 4,
      bgSrc: "assets/images/pages/explore/explore-1.jpg",
      title: "Marine Conservation",
      content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis quas odit aperiam libero veniam quidem saepe odio corrupti aliquam at ex, doloribus tempore. Repudiandae, optio. In vero consequuntur maxime."
    },
    {
      id: 5,
      bgSrc: "assets/images/pages/explore/explore-2.jpg",
      title: "Renewable Energy",
      content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis quas odit aperiam libero veniam quidem saepe odio corrupti aliquam at ex, doloribus tempore. Repudiandae, optio. In vero consequuntur maxime."
    },

  ];
  carouselOptions = signal<OwlOptions>({
    loop: false,
    autoplay: false,
    dots: false,
    nav: false,
    rtl: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  });

}
