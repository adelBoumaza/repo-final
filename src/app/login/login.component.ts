import { NgModule, Component, OnInit } from '@angular/core';
import { User } from './login.model';
import { ApiService } from '../service/api.service';
import { error } from 'selenium-webdriver';
import { Router } from '@angular/router';

@Component({
    selector : 'app-login',
    templateUrl : 'login.component.html',
    styleUrls : ['login.component.css']

})
export class LoginComponent implements OnInit {

    user: User;
    success: string;

    constructor(private apiService: ApiService,
                private _router: Router) {
    }

    ngOnInit(): void {
        this.user = new User({username: 'Adel', password: 'Adel'});
    }


    doLogin() {
        this.apiService.login(this.user)
        .subscribe(response => {
            localStorage.setItem('token', `${response.token_type} ${response.access_token}`);
            console.log('localStorage' + localStorage.getItem('token'));
            this._router.navigateByUrl('/home');
        }, (err) => {
           console.log('error ' + err);
        });

        console.log('end' + this.user);
        console.log('token end ' + localStorage.getItem('token'));
    }
}
