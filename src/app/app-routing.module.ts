import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharactersComponent } from './characters/characters.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { HomeComponent } from './home/home.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LocationsComponent } from './locations/locations.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},

  //Route Episodes
  { path: 'episodes', component: EpisodesComponent},
  { path: 'episodes/:episodeId', component: EpisodeDetailsComponent},

  //Route Characters
  { path: 'characters', component: CharactersComponent},
  { path: 'characters/:characterId', component: CharacterDetailsComponent},

  //Route Locations
  { path: 'locations', component: LocationsComponent},
  { path: 'locations/:locationId', component: LocationDetailsComponent},

  { path: '**', redirectTo: 'home', pathMatch: 'full'} // en cas d'erreur dans l'url ça redirige vers la page home.
  // ce dernier path doit tjr être le dernier.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
