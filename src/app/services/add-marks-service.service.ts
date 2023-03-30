import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GradeRequest} from "../models/grade.request";

@Injectable({
  providedIn: 'root'
})
export class AddMarksServiceService {
  private baseURL = "http://localhost:8080/api/v1/grade";

  constructor(private httpClient: HttpClient) { }


  addMarksTostudent(request: GradeRequest): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, request);
  }

  viewMarksheet(studentId: string  ): Observable<Object>{
    console.log(`${this.baseURL}/student${studentId}`)
    return this.httpClient.get(`${this.baseURL}/student/${studentId}`);

  }


  publish(grade:any,status:boolean)
  {    const url = `http://localhost:8080/api/v1/grade/student/${grade.id}/publish/${status}`;
    return   this.httpClient.get(url);
  }

}

