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
    private btnUpdate: boolean;
    constructor(private filmService: FilmService) { }

    private categories = ['Film d\'action‎ ', 'Film d\'animation‎',
                          'Film d\'aventure‎ ', 'Film biographique‎',
                          'Film catastrophe‎', 'Comédie',
                          'Film documentaire‎', 'Film dramatique‎', 'Film fantastique',
                          'Film de fantasy‎', 'Film d\'exploitation‎', 'Film de guerre‎',
                          'Film historique‎', 'Film d\'horreur‎', 'Film policier‎', 'Film politique‎',
                          'Film de science-fiction‎', 'Film à sketches‎', 'Western‎'
                        ];
    private durrees  =   [10, 15, 20 , 25, 30, 35, 40,
                        45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
                        95, 100, 105, 110, 115, 120, 125, 130,
                        135, 140, 145, 150, 155, 160, 165, 170
                        ];

    reset() {
        this.film = new Film( 0, 0, '', '', '', '', 105);
        this.btnUpdate = false;
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
    editer(item)
    {

        this.btnUpdate = true;
        this.film = new Film(item.note, item.prix, item.nomFilm, item.categorie, item.date, item.lieu, item.durree);
        this.film._id = item.id;
        window.scrollTo(0, 0);
    }
}
