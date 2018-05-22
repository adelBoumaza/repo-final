import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes);
