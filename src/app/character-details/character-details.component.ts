import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character$: Observable<any>;
  constructor(private rickAndMortyService: RickAndMortyService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCharacterDetails();
  }

  loadCharacterDetails(){
    const routeParams = this.route.snapshot.paramMap;
    const characterId = parseInt(routeParams.get('characterId'));
    this.character$ = this.rickAndMortyService.getCharacter(characterId); 
  }
}
