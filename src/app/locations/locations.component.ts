import { Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { RickAndMortyService } from '../services/rick-and-morty.service';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locations$: Observable<any>;
  public model: any;
  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200), // permet de temporiser pendant 0.2 seconde.
      distinctUntilChanged(),
      map(term => term === '' ? []
        : this.rickAndMortyService
        .getTypes().filter(v => v.toLowerCase()
        .indexOf(term.toLowerCase()) > -1)
        .slice(0, 10)) // le 0 définit l'index de départ et le 10 indique la longueur
    );

  formatter = (result: string) => result.toUpperCase(); 
  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.loadDataLocations();
  }

  loadDataLocations(){
    this.locations$ = this.rickAndMortyService.getLocations();
   this.rickAndMortyService.getLocations().subscribe(console.log);
  }

  changePageByUrl(url:string){
    if (url != 'null') {
      this.locations$ = this.rickAndMortyService.getByUrl(url);
    }else{
      return false;
    }
  }

  onEnter(){
    this.locations$ = this.rickAndMortyService.getLocationsByType(this.model);
    this.model = '';
  }
}
