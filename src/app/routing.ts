import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmComponent } from './film/film.component';




const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'film', component: FilmComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes);
