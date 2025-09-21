import { Component } from '@angular/core';
import { DropdownComponent } from "../../../shared/dropdown/dropdown.component";
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '@ngx-translate/core';
// import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-nav-bar',
  imports: [DropdownComponent, TranslatePipe],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(private language: LanguageService) { }
  links = [
    { isDropDwon: false, title: 'NAV.OUR_COMPANIES' },
    { isDropDwon: true, title: 'NAV.OUR_SERVICES' },
    { isDropDwon: true, title: 'NAV.OUR_PROJECTS' },
    { isDropDwon: false, title: 'NAV.OUR_STORY' },
    { isDropDwon: true, title: 'NAV.RESOURCES' }
  ];

  changeLanguage() {
    this.language.language() === 'en'
      ? this.language.changeLanguage('ar')
      : this.language.changeLanguage('en')
    console.log(this.language.language())
  }
}
