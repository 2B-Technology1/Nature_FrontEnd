import { Component, effect, Injector, runInInjectionContext } from '@angular/core';
import { SectionsTitleComponent } from "../../../../shared/sections-title/sections-title.component";
import { ImpactCardComponent } from '../../components/impact-card/impact-card.component';
import { ImpactService } from '../../../../cores/services/apiServices/impact.service';
import { LanguageService } from '../../../../cores/services/language.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-impact',
  imports: [SectionsTitleComponent, ImpactCardComponent, TranslatePipe],
  templateUrl: './impact.component.html',
  styleUrl: './impact.component.scss'
})
export class ImpactComponent {
  constructor(public impact: ImpactService, public language: LanguageService, private injector: Injector) { }

  ngOnInit() {
    this.impact.setEndPoint = 'impacts';
    runInInjectionContext(this.injector, () => {
      effect(() => {
        if (this.language.language() === 'en' && this.impact.impact_en && this.impact.impact_en.length > 0) {
          this.impact.impact = this.impact.impact_en
        } else if (this.language.language() === 'ar' && this.impact.impact_ar && this.impact.impact_ar.length > 0) {
          this.impact.impact = this.impact.impact_ar
        } else {
          this.callService();
        }
      });
    });

  }

  callService() {
    this.impact.getAll().subscribe({
      next: (res) => {
        console.log(res)
        if (this.language.language() === 'en') {
          this.impact.impact_en = res.impacts;
        } else {
          this.impact.impact_ar = res.impacts;
        }
        this.impact.impact = this.language.language() === 'en' ? this.impact.impact_en : this.impact.impact_ar;
      },
      error: (err) => { console.log(err) }
    });
  }

  impactCardsList = [
    {
      id: 1,
      logo: "assets/images/pages/Frame 531.png",
      counter: 20664,
      title: "Mangroves Planted"
    },
    {
      id: 2,
      logo: "assets/images/pages/Frame 532.png",
      counter: 20664,
      title: "Marines Restored"
    },
    {
      id: 3,
      logo: "assets/images/pages/Frame 534.png",
      counter: 20664,
      title: "Carbon Offset"
    }
  ]
}
