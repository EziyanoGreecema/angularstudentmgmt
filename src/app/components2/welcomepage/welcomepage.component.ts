import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CreateSubjectComponent} from "../../create-subject/create-subject.component";

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent {


  constructor(private router:Router) {
  }

  createStudent() {
    this.router.navigate(['add/students']);
  }

  createSubject() {
    this.router.navigate(['add/subjects']);
  }
  addMarksToStudents() {
    // this.router.navigate(['add/marks']);

    this.router.navigate([ 'list/students']);
  }


}
