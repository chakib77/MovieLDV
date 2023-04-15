import { Component, OnInit } from '@angular/core';
import { RecupFilmsService } from 'src/app/service/recup-films.service';
import { Film } from 'src/app/models/Film';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  favo: Film[] = [];
  favoSubject: any;

  constructor(private recupFilmsService: RecupFilmsService) { }

  ngOnInit(): void {
    let favo: any = localStorage.getItem('favo');
    if (favo) {
      this.favo = JSON.parse(favo);
      console.log(this.favo);
      console.log("Bien envoyé")
    }
  }

  supprimerFilmFavori(leFilm: any): void {
    const index = this.favo.indexOf(leFilm);
    if (index !== -1) {
      this.favo.splice(index, 1);
      localStorage.setItem('favo', JSON.stringify(this.favo));
      this.favoSubject.next(this.favo);
    }
  }

}
