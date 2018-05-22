import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../login/login.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class ApiService {

    private baseUrl = '/oauth/token';

    /**
     * Constructor
     * @param _httpClient
     */
    constructor(private _httpClient: HttpClient) {
    }

    /**
     * Call Login Endpoint
     * @param username
     * @param password
     */
    public login(user: User): Observable<any> {
        const headers = new HttpHeaders()
            .set('Authorization', 'Basic c3FsaTpzcWxpMjAxOA==')
        ;

        const body = new HttpParams()
            .set('username', user.userName)
            .set('password', user.password)
            .set('grant_type', 'password')
        ;

        return this._httpClient.post<any>(`${this.baseUrl}`, body, { headers: headers });
    }

    /*public login(user: User): Observable<any> {
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
    }*/
}
