import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rick-et-morty-app';

  toBack(event){ // cette méthode permet de revenir en haut de la page au click sur le footer de chaque page.
    window.scrollTo(0, 0); // les ccordonnées designent l'endroit où revenir sur la page (x, y) exprimés en px.
    event.preventDefault();
  }
}
