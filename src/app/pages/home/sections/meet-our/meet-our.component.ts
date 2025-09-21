import { Component, effect, Injector, runInInjectionContext } from '@angular/core';
import { MarqueeComponent } from "../../components/marquee/marquee.component";
import { CommonModule } from '@angular/common';
import { SectionsTitleComponent } from "../../../../shared/sections-title/sections-title.component";
import { PartnersService } from '../../../../cores/services/apiServices/partners.service';
import { LanguageService } from '../../../../cores/services/language.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-meet-our',
  imports: [CommonModule, SectionsTitleComponent, TranslatePipe],
  templateUrl: './meet-our.component.html',
  styleUrl: './meet-our.component.scss'
})
export class MeetOurComponent {
  constructor(public partners: PartnersService, public language: LanguageService, private injector: Injector,
  ) { }

  ngOnInit() {
    this.partners.setEndPoint = 'partners';
    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.callService();
      });
    });
  }

  callService() {
    this.partners.getAll().subscribe({
      next: (res) => {
        if (this.language.language() === 'en') {
          this.partners.partners_en = res.partners;
        } else {
          this.partners.partners_ar = res.partners;
        }
        this.partners.partners = this.language.language() === 'en' ? this.partners.partners_en : this.partners.partners_ar;
      },
      error: (err) => { console.log(err) }
    })
  }



  // companies = [
  //   'assets/images/pages/companies/Frame 595.png',
  //   'assets/images/pages/companies/Frame 596.png',
  //   'assets/images/pages/companies/Frame 597.png',
  //   'assets/images/pages/companies/OUR.png',
  //   'assets/images/pages/companies/Frame 598.png',
  //   'assets/images/pages/companies/Frame 599.png'
  // ]
}
