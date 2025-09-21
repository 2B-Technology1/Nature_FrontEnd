import { Component } from '@angular/core';
import { HeroComponent } from "./sections/hero/hero.component";
import { AboutComponent } from './sections/about/about.component';
import { ImpactComponent } from './sections/impact/impact.component';
import { ControlSectionsDispalyInHomeService } from '../../cores/services/control-sections-dispaly-in-home.service';
import { MeetOurComponent } from './sections/meet-our/meet-our.component';
import { ExploreComponent } from './sections/explore/explore.component';
import { DiscoverProjectsComponent } from './sections/discover-projects/discover-projects.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent, ImpactComponent, MeetOurComponent, ExploreComponent, DiscoverProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public showAllSections: ControlSectionsDispalyInHomeService) { }

}
