import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { User } from '../login/login.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiService
{
    private baseUrl = '/oauth/token';

    constructor(private _http: Http) {
    }

    public login(user: User): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Basic c3FsaTpzcWxpMjAxOA==');
        const options = new RequestOptions({ headers: headers });
        const body = new URLSearchParams();
        body.append('username', user._username);
        body.append('password', user._password);
        body.append('grant_type', 'password');

        console.log(options);

        return this._http.post(`${this.baseUrl}`, body, options)
            .map((response: Response) => response.json())
        ;
    }
}