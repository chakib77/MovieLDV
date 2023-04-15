import { Component } from '@angular/core';
import { RecupFilmsService } from 'src/app/service/recup-films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  qFilms: any

  constructor(private recupFilmsService: RecupFilmsService) {}

  ngOnInit() {
    this.recupFilmsService.getQuatrePopulaires().subscribe((data) => {
      this.qFilms = data;
    });
  }
  
}
