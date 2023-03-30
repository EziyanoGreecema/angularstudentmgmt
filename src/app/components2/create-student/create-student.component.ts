import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Student} from "../../models/student.model";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  constructor(  private router: Router,
                private studentService: StudentService
                  ) {
  }


  student: Student = new Student();



  studentName: string=''

  studentEmail: string=''

  subjectName:String =''

  subjectCode:String = ''


  obtainedMarks:Number = 0;

  ngOnInit(): void {
  }

  saveStudent(){
    console.log("whats this returning or not",  this.studentService.createStudent(this.student))
    this.studentService.createStudent(this.student).subscribe(data=>console.log(data),
      error => console.log(error))
  }
  getToStudentList(){
    this.router.navigate(['/students']);
  }

  onSubmit(){
    console.log('Student Name:', this.studentName);
    console.log('Student Email:', this.studentEmail);
    console.log(this.student);
    this.saveStudent();
  }


}
