//Angula import
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

// routing Rick and Morty
import { AppRoutingModule } from './app-routing.module';

//library
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// component 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RickAndMortyService } from './services/rick-and-morty.service';
import { EpisodesComponent } from './episodes/episodes.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EpisodesComponent,
    EpisodeDetailsComponent,
    CharactersComponent,
    CharacterDetailsComponent,
    LocationsComponent,
    LocationDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [ // à la création du dossier service il faut le mettre dans les providers 
    // injecter les services 
    RickAndMortyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
