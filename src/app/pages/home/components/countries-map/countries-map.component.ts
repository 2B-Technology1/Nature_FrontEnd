import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CountryService } from '../../../../cores/services/apiServices/country.service';

@Component({
  selector: 'app-countries-map',
  imports: [],
  templateUrl: './countries-map.component.html',
  styleUrl: './countries-map.component.scss'
})
export class CountriesMapComponent {
  constructor(public countries: CountryService) { }

  @Output() country = new EventEmitter<string>();

  ngOnInit() {
    this.countries.setEndPoint = "countries";

    this.countries.getAll().subscribe({
      next: (res) => { console.log(res) },
      error: (err) => { console.log(err) }
    })
  }
  selectedContry = signal<'egypt' | 'sudan' | 'UAE'>('egypt');
  changeCountry(countryName: 'egypt' | 'sudan' | 'UAE', event?: any) {

    this.selectedContry.set(countryName);
    if (event) {
      this.country.emit(event.target.id);
    }
  }
}
