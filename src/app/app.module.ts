import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './routing';
import { ApiService } from './service/api.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { HttpClientModule } from '@angular/common/http';
import { FilmComponent } from './film/film.component';
import { FilmService } from './film/film.service';
import {RatingModule} from 'ngx-rating';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing,
    RatingModule
  ],
  providers: [
    ApiService,
    HomeService,
    FilmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
