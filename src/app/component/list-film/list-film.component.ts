import { Component, OnInit } from '@angular/core';
import { RecupFilmsService } from 'src/app/service/recup-films.service';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit {
  films: any;

  constructor(private recupFilmsService: RecupFilmsService) {}

  ngOnInit() {
    this.recupFilmsService.getFilmsPopulaires().subscribe((data) => {
      this.films = data;
    });
  }
}
