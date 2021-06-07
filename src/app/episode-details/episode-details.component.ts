import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RickAndMortyService } from '../services/rick-and-morty.service';
@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss']
})
export class EpisodeDetailsComponent implements OnInit {
  episode$: Observable<any>;

  constructor( private rickAndMortyService: RickAndMortyService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadEpisodeDetails();
  }

  loadEpisodeDetails(){
    const routeParams = this.route.snapshot.paramMap;
    const episodeId = parseInt(routeParams.get('episodeId'));
    this.episode$ = this.rickAndMortyService.getEpisode(episodeId); 
  }
}
