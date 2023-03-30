import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentListComponent} from "./components2/student-list/student-list.component";
import {CreateStudentComponent} from "./components2/create-student/create-student.component";
import {WelcomepageComponent} from "./components2/welcomepage/welcomepage.component";
import {CreateSubjectComponent} from "./create-subject/create-subject.component";
import {ListSubjectComponent} from "./list-subject/list-subject.component";
import {AddMarkToStudentComponent} from "./add-mark-to-student/add-mark-to-student.component";
import {HomeComponent} from "./authComponent/home/home.component";
import {RegisterComponent} from "./authComponent/register/register.component";
import {LoginComponent} from "./authComponent/login/login.component";
import {ProfileComponent} from "./authComponent/profile/profile.component";
import {GradesComponent} from "./grades/grades.component";


const routes: Routes = [
  { path: '', component: WelcomepageComponent },
  { path: 'add/students', component: CreateStudentComponent },
  { path: 'add/subjects', component: CreateSubjectComponent },
  { path: 'list/subjects', component: ListSubjectComponent },
  { path: 'list/students', component: StudentListComponent },
  { path: 'add/marks/:id', component: AddMarkToStudentComponent },
  {path:'get/marks/:id', component: GradesComponent },


  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },

  /*
    // { path: 'results/:id', component: BoardAdminComponent },
  /*  { path: 'results', component: ResultListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
  // { path: 'students/:id', component: StudentDetailComponent },
  // { path: 'subjects/:id', component: SubjectDetailComponent },
  // { path: 'results/:id', component: ResultFormComponent },
  // { path: 'results', component: ResultListComponent },
  // */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
