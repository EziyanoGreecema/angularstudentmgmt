import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Student} from "../../models/student.model";
import {StudentService} from "../../services/student.service";
import {AddMarksServiceService} from "../../services/add-marks-service.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  public text:String="Students list"

  students: Student[];


  constructor(private StudentService: StudentService,private marksService:AddMarksServiceService,
              private router: Router) {
    this.students = [];

  }

  ngOnInit(): void {
    this.getStudents();

  }

  private getStudents(){
    this.StudentService.getStudentList().subscribe(data => {
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


  viewMarksheet(email: string) {
    this.router.navigate(['get/marks', email]);

  }
}
