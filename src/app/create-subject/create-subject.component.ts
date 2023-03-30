import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Subject} from "../models/subject.model";
import {SubjectService} from "../services/subject.service";


@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  // styleUrls: ['./create-subject.component.css']
  styleUrls: ['../app.component.css']
})
export class CreateSubjectComponent {

  subject: Subject= new Subject();
  constructor(private subjectService: SubjectService,
              private router: Router) { }
  ngOnInit(): void {
  }

  saveSubject(){
    console.log("whats this returning or not",  this.subjectService.createSubject(this.subject))
  }

  goToSubjectList(){
    this.router.navigate(['/list/subjects']);
  }


/*  onSubmit(){
    this.subjectService.createSubject(this.subject)
      .pipe(
        tap(
          response => {
            console.log('Subject created successfully:', response);
            // do something with the response, e.g. show a success message
          },
          error => {
            console.log('Error creating subject:', error);
            // handle the error, e.g. show an error message
          }
        )
      )
      .subscribe();
  }*/

  onSubmit(){
    this.subjectService.createSubject(this.subject)
      .subscribe(
        response => {
          console.log('Subject created successfully:', response);
          this.goToSubjectList();
          // do something with the response, e.g. show a success message
        },
        error => {
          console.log('Error creating subject:', error);
          // handle the error, e.g. show an error message
        }
      );
  }
}
