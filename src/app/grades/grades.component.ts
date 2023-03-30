import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {StudentService} from "../services/student.service";
import {SubjectService} from "../services/subject.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AddMarksServiceService} from "../services/add-marks-service.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {
  emailId!: string;
  private errorMessage!: string;


  grades: any[] = [];


  constructor(private studentService: StudentService, private route: ActivatedRoute,
              private marksService: AddMarksServiceService, private httpClient: HttpClient,
              private router: Router) {

  }

  ngOnInit(): void {
    this.emailId = this.route.snapshot.params['id'];
    this.viewMarksheet()
  }


  viewMarksheet() {
    this.marksService.viewMarksheet(this.emailId).subscribe((data: any) => {
        this.grades = data;
        console.log(data)
      }
      ,
      (error) => {
        if (error.status === 409) {
          console.log(this.errorMessage)
        } else {
          this.errorMessage = `Error  ${this.emailId}: ${error.message}`;
        }
        console.error(`Error fetching marks of student with email: ${this.emailId}: ${error.message}  ${error}`);
      })
  }

  /*
    publishGrade(grade: any) {
      const publishedValue = grade.published ? true : false;
      this.httpClient.post(`http://localhost:8080/api/v1/grade/student/${grade.id}/publish`, {  publishedValue }).subscribe((data: any) => {
        console.log('Grade published:', data);
      }, error => console.log(error));
    }

  */

  publishGrade(grade: any) {
    const requestBody = grade.published
    console.log(grade.published)

    this.marksService.publish(grade, grade.published).subscribe
    ((data: any) => {
        console.log("success")
      }
      ,
      (error) => {

        console.error(`Error saving marks for subject ${this.emailId}: ${error.message}  ${error}`);

      })

  }
}
