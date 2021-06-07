import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = this.rickAndMorty.getCarousselImages();
  constructor(private rickAndMorty: RickAndMortyService) { }

  ngOnInit(): void {
  }

}
