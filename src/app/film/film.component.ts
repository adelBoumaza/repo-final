import { Component, OnInit } from '@angular/core';
import { Film } from './film.model';
import { FilmService } from './film.service';

@Component({
    selector: 'app-film',
    templateUrl: 'film.component.html',
    styleUrls: ['film.component.css']
})
export class FilmComponent implements OnInit {
    private film: Film;
    private films: any;
    constructor(private filmService: FilmService) { }

    private categories = ['Film d\'action‎ ', 'Film d\'animation‎',
                          'Film d\'aventure‎ ', 'Film biographique‎',
                          'Film catastrophe‎', 'Comédie',
                          'Film documentaire‎', 'Film dramatique‎', 'Film fantastique',
                          'Film de fantasy‎', 'Film d\'exploitation‎', 'Film de guerre‎',
                          'Film historique‎', 'Film d\'horreur‎', 'Film policier‎', 'Film politique‎',
                          'Film de science-fiction‎', 'Film à sketches‎', 'Western‎'
                        ];

    reset() {
        this.film = new Film( 0, 0, '', '', '', '');
    }
    ngOnInit(): void {
        this.getAll();
        this.reset();
    }

    saveFilm() {
        this.filmService.save(this.film)
        .subscribe(response => {
            console.log(response);
            this.getAll();
            this.reset();
        }, error => {

        });
    }

    getAll() {
        this.filmService.getAll()
        .subscribe(response => {
           this.films = response;
           console.log(this.films);
        }, error => {
            console.log(error);
        });
    }
}
