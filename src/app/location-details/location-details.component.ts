import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {
  location$: Observable<any>;
  constructor(private rickAndMortyService: RickAndMortyService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadLocationDetails();
  }

  loadLocationDetails(){
    const routeParams = this.route.snapshot.paramMap;
    const locationId = parseInt(routeParams.get('locationId'));
    this.location$ = this.rickAndMortyService.getLocation(locationId); 
    // this.rickAndMortyService.getLocation(locationId).subscribe(console.log);
  }
}
