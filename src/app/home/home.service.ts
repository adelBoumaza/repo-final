import { Observable } from 'rxjs';
import { Produit } from './produit.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HomeService {

    private baseUrl  = '/API/SQLI/';
    private headers: HttpHeaders;

    constructor(private _http: HttpClient) {
    }

    public searchAll(): Observable<any> {
        console.log(localStorage.getItem('token'));
        this.headers = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
        return this._http.get<any>(`${this.baseUrl}` + 'produit/findAll', { headers: this.headers });
    }

    public calculate(produit: any): Observable<any> {
        this.headers = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
        return this._http.post<any>(`${this.baseUrl}` + 'produit/calculate', produit, { headers: this.headers });
    }
}
