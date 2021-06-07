import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  saisons$: Observable<any>;
  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
     this.loadDataEpidodes();
  }

  loadDataEpidodes(){
    this.saisons$ = this.rickAndMortyService.getEpisodes();
    this.rickAndMortyService.getEpisodes().subscribe(console.log);

  }
}
