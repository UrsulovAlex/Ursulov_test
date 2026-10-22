import { Component } from '@angular/core';
import { GiphySearch } from './components/giphy-search/giphy-search';


@Component({
  selector: 'app-root',
  imports: [GiphySearch],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
 
}

