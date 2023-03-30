import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {SubjectService} from '../services/subject.service';
import {Subject} from '../models/subject.model';
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../models/student.model";
import {StudentService} from "../services/student.service";
import {AddMarksServiceService} from "../services/add-marks-service.service";
import {GradeRequest} from "../models/grade.request";

@Component({
  selector: 'app-add-mark-to-student',
  templateUrl: './add-mark-to-student.component.html',
  styleUrls: ['./add-mark-to-student.component.css']
})
@Injectable()
export class AddMarkToStudentComponent implements OnInit {
  id!: number;


  student: Student = new Student();
  courses: Subject[] = [];

  gradeRequests: GradeRequest[] = [];
  results: any[] = [];

  grades: any;
  marks: { [key: string]: number } = {};
  private errorMessage!: string;

  constructor(private fb: FormBuilder, private studentService: StudentService, private subjectService: SubjectService, private route: ActivatedRoute,
              private marksService: AddMarksServiceService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // this.emailId = JSON.stringify(this.route.snapshot.params['id']);
    // this.emailId=this.route.snapshot.params['sid'];

    this.getCourses();


    this.studentService.getStudentById(this.id).subscribe(data => {
      console.log(data)
      this.student = data;
    }, error => console.log(error));
    // this.viewMarksheet()
  }

  /*  submitMarks() {
      console.log(this.marks); // just for debugging
        const marksArray = [];
        for (const subject of this.courses) {
          const marks = this.marks[subject.id];
          if (marks !== undefined && marks != null && !isNaN(marks)) {
            marksArray.push({ subjectId: subject.id, marks: marks });
          }
         /!* if (marks !== undefined) {
            marksArray.push({ subjectId: subject.id, marks: marks });
          }*!/
        }
        console.log(marksArray); // just for debugging

        // TODO: call a service to save the marksArray


      // TODO: call a service to save the marks
    }*/
  submitMarks() {
    const marksArray = [];
    let needsReinput = false;
    for (const subject of this.courses) {
      const marks = this.marks[subject.id];
      if (marks != null && !isNaN(marks)) {
        marksArray.push({subjectId: subject.id, marks: marks});
      } else {
        needsReinput = true;
        break;
      }
    }

    if (needsReinput) {
      alert('Please enter valid marks for all subjects. and that marks contains only numeric values');
      return;
    }

    console.log(marksArray); // just for debugging
    console.log(this.student.id)


    this.gradeRequests = marksArray.map((request) => {
      return new GradeRequest(this.student.id, request.marks, request.subjectId,);
    });
    console.log(this.gradeRequests)
    // this.gradeRequests.forEach()
    // this.marksService.addMarksTostudent()

    this.saveMarks();

  }

  // TODO: call a service to save the marksArray


  saveMarks() {
    this.gradeRequests.forEach((request) => {
      this.marksService.addMarksTostudent(request).subscribe(
        (response) => {
          console.log(`Successfully saved marks for subject ${request.subjectId}`);
        },
        (error) => {
          if (error.status === 409) {
            console.log(this.errorMessage)

            this.errorMessage = `Marks for subject ${request.subjectId} have already been saved.`;
          } else {
            this.errorMessage = `Error saving marks for subject ${request.subjectId}: ${error.message}`;
          }
          console.error(`Error saving marks for subject ${request.subjectId}: ${error.message}  ${error}`);
        }
      );
    });


  }
/*  viewMarks(){
    this.marksService.viewMarksheet(this.id).subscribe(
      (response) => {
        console.log("consoling the response")
        console.log(response)
        console.log(`Successfully saved marks for subject ${this.id}`);
      },
      (error) => {
        if (error.status === 409) {
          console.log(this.errorMessage)

          // this.errorMessage = `Marks for subject ${request.subjectId} have already been saved.`;
        } else {
          this.errorMessage = `Error saving marks for subject ${this.id}: ${error.message}`;
        }
        console.error(`Error saving marks for subject ${this.id}: ${error.message}  ${error}`);

      })
  }*/

  private getCourses(): void {
    this.subjectService.getSubjectsList().subscribe(
      (data: Subject[]) => {
        console.log('Subjects loaded', data);
        this.courses = data;
      },
      (error: any) => {
        console.log('Error loading subjects:', error);
      }
    );
  }

/*  viewMarksheet() {
    this.marksService.viewMarksheet(this.id).subscribe(
      (response) => {
        this.grades=response
        console.log("response")
        console.log(response)


        console.log(`Successfully retreived marks for subject ${this.id}`);
        this.results.push(response);

        console.log(this.results);
        console.log(this.grades)
      },
      (error) => {
        if (error.status === 409) {
          console.log(this.errorMessage)

          // this.errorMessage = `Marks for subject ${request.subjectId} have already been saved.`;
        } else {
          this.errorMessage = `Error saving marks for subject ${this.id}: ${error.message}`;
        }
        console.error(`Error saving marks for subject ${this.id}: ${error.message}  ${error}`);

      })

  }*/
}
