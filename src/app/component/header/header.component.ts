import { Component } from '@angular/core';
import { Film } from 'src/app/models/Film';
import { RecupFilmsService } from 'src/app/service/recup-films.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private recupFilmsService: RecupFilmsService) { }

  searchQuery: string = '';
  movies: any;

 /* onSearch(event: Event) {
    const target = (event.target as HTMLInputElement);
    if (target && target.value) {
      const query = target.value;
      this.searchQuery = query;
      this.recupFilmsService.searchFilms(query).subscribe((data: Film[]) => {
        this.movies = data;
      });
    }
  } */

  }

