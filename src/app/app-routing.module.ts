import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ListFilmComponent } from './component/list-film/list-film.component';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { FavorisComponent } from './component/favoris/favoris.component';
import { FilmsVenirComponent } from './component/films-venir/films-venir.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'list', component: ListFilmComponent },
    { path: 'details/:id', component: MovieDetailsComponent },
    { path: 'favoris', component: FavorisComponent},
    { path: 'avenir', component: FilmsVenirComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }