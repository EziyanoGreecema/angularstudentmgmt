import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/result/';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getAdminBoard(id:number): Observable<any> {

    // return this.http.get(API_URL + 'admin', { responseType: 'text' });
    console.log(API_URL +`/api/result/user/${id}`);

    // return this.http.get(API_URL +'allstudents', { responseType: 'text' });
    return this.http.get(API_URL +`user/${id}`, { responseType: 'text' });
  }

      }
