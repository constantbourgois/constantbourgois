import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class ContactService {

    private postUrl = 'http://test.constantbourgois.com/app/contact/thankyou.php';

    constructor(private http: Http) { }

    postContact(contact: Object): Observable<any> {
        /*const body = new URLSearchParams();
        Object.keys(contact).forEach(key => {
            body.set(key, contact[key]);
        });*/
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });

    let options = new RequestOptions({ headers: headers });
        return this.http.post(this.postUrl, contact, options).map(res => res.json());
    }



}
