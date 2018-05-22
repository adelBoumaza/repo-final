

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Produit } from './produit.model';



@Injectable()
export class HomeService {

    private baseUrl             = '/API/SQLI/';
    private headers: Headers    = new Headers();

    constructor(private _http: HttpClient) {
    }

    public searchAll() {

        this.headers.set('Authorization', localStorage.getItem('token'));
        return this._http.get(`${this.baseUrl}` + 'produit/findAll', { headers: this.headers })
            .map((response: Response) => response.json())
        ;
    }

    public calculate(produit: any)
    {
        this.headers.set('Authorization', localStorage.getItem('token'));
        return this._http.post(`${this.baseUrl}` + 'produit/calculate', produit, { headers: this.headers })
            .map((response: Response) => response.json())
        ;
    }

}