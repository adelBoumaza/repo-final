import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FilmService {

    private baseUrl  = '/API/SQLI/';
    private headers: HttpHeaders;

    constructor(private _http: HttpClient) {
    }

    public getAll(): Observable<any> {
        console.log(localStorage.getItem('token'));
        this.headers = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
        return this._http.get<any>(`${this.baseUrl}` + 'film/findAll', { headers: this.headers });
    }

    public save(film: any): Observable<any> {
        this.headers = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
        return this._http.post<any>(`${this.baseUrl}` + 'film/save', film, { headers: this.headers });
    }
}