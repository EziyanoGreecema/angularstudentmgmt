import { Component } from '@angular/core';
import {Student} from "../models/student.model";
import {AddMarkToStudentComponent} from "../add-mark-to-student/add-mark-to-student.component";
import {Router} from "@angular/router";
import {StudentService} from "../services/student.service";

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.css']
})
export class ShowStudentsComponent {


  students: Student[];


  constructor(private StudentService: StudentService
              ,private marksService: AddMarkToStudentComponent,
              private router: Router) {
    this.students = [];

  }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents(){
    this.StudentService.getStudentList().subscribe(data => {
      console.log("hey there",data);
      this.students = data;
    });
  }

  StudentDetails(id: number){
    this.router.navigate(['Student-details', id]);
  }

  updateStudent(id: number){
    this.router.navigate(['update-Student', id]);
  }

  deleteStudent(id: number){
    this.StudentService.deleteStudent(id).subscribe( data => {
      console.log(data);
      this.getStudents();
    })
  }

  addMarks(id: number) {
    this.router.navigate(['add/marks', id]);

  }

}
