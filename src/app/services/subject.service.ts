import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Subject} from "../models/subject.model";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://localhost:8080/api/v1/subject";

  getSubjectsList(): Observable<Subject[]>{
    return this.httpClient.get<Subject[]>(`${this.baseURL}/subjects`);
  }

  createSubject(subject: Subject): Observable<Object>{
    console.log(subject);
    return this.httpClient.post(`${this.baseURL}`, subject);
  }

  getSubjectById(id: number): Observable<Subject>{
    return this.httpClient.get<Subject>(`${this.baseURL}/subject/${id}`);
  }

  updateSubject(id: number, subject: Subject): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, subject);
  }

  deleteSubject(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
/*
  getResult(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
*/

}
