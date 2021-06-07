import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }

  getTypes(){
    return ["Planet", "Cluster", "Space station", "Microverse", "TV", "Resort", "Fantasy town", "Dream", "Dimension", "unknown", "Menagerie", "Game", "Customs", "Daycare", "Dwarf planet (Celestial Dwarf)", "Miniverse", "Teenyverse", "Box", "Spacecraft", "Artificially generated world", "Machine", "Arcade", "Spa", "Quadrant", "Quasar", "Mount", "Liquid", "Convention", "Woods", "Diegesis", "Non-Diegetic Alternative Reality", "Nightmare", "Asteroid", "Acid Plant", "Reality", "Death Star", "Base"];
  }

  getSaisonsFilters(){
    return ["S01", "S02", "S03", "S04"];
  }
 
  getCarousselImages(){ // comme il n y a pas 
    return [
      {
        id: 1,
        src: "assets/images/unknown.png",
        title: "Le trailer complètement barré de la saison 5 de Rick and Morty est là"
      },
      {
        id: 1,
        src: "assets/images/unknown1.png",
        title: "Dan Harmon, le cocréateur de Rick and Morty, quitte Twitter après une polémique"
      }
    ].map((n) => n); // permet de stocker le tableau dans map et le retourner sous "n" ==> "n" on peut l'appeler comme on veut. 
  }

  getByUrls(urls){
    return forkJoin(urls.map(url => this.http.get(url)));
  }

  getByUrl(url:string){  // cette méthode nous servira à faire la pagination.
    return this.http.get(url);
  }

  getEpisode(id:number){
    return this.http.get("http://rickandmortyapi.com/api/episode/" + id).pipe(
      map((episode:any) => {
        episode.charactersCount = episode.characters.length;
        episode.characters = this.getByUrls(episode.characters);
        return episode
      })
    );
  }

  getEpisodes(){
    let saisons = [];

    return this.http.get("http://rickandmortyapi.com/api/episode/"
    + Array.from({length : 41 }, (v, k) => k + 1)).pipe(
      map((episodes:any) => {
          this.getSaisonsFilters().forEach((saisonName) => {
              let saison = episodes.filter(
                ((episode:any) => episode.episode.indexOf(saisonName) > -1)
              );
              saisons.push(saison);
          });
          return saisons;
      })
    )
  }

  getLocationsByType(type:string){ // méthode qui nous permet l'auto-completion
    return this.http.get("https://rickandmortyapi.com/api/location?type=" + type);
  }

  getLocations(){
    return this.http.get("https://rickandmortyapi.com/api/location?page=1");
  }

  getLocation(id:number){
    return this.http.get("https://rickandmortyapi.com/api/location/" + id).pipe(
      map((location:any) => {
        location.residentsCount = location.residents.length;
        location.residents = this.getByUrls(location.residents);
        return location;
      })
    );
  }

  getCharacters(){
    return this.http.get("https://rickandmortyapi.com/api/character?page=1");
  }

  getCharacter(id:number){
    return this.http.get("http://rickandmortyapi.com/api/character/" + id).pipe(
      map((character:any) => {
        character.episodesCount = character.episode.length;
        character.episode = this.getByUrls(character.episode);
        return character;
      })
    );
  }
  
  getCharactersBySpecie(specie:string) {  // permet d'avoir les characters en fonction de leur espèces.
    return this.http.get("https://rickandmortyapi.com/api/character?species=" + specie);
  }
}
