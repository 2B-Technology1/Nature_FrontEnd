import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./cores/components/nav-bar/nav-bar.component";
import { FooterComponent } from "./cores/components/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { ControlSectionsDispalyInHomeService } from './cores/services/control-sections-dispaly-in-home.service';
import { NgwWowService } from 'ngx-wow';
import { LoaderComponent } from "./cores/components/loader/loader.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, FooterComponent, HomeComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public showFooter: ControlSectionsDispalyInHomeService, private wowService: NgwWowService) { }

  ngOnInit() {
    this.wowService.init();
  }
}
