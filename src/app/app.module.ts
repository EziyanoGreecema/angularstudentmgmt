import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CreateStudentComponent} from './components2/create-student/create-student.component';
import {StudentDetailsComponent} from './components2/student-details/student-details.component';
import {StudentListComponent} from './components2/student-list/student-list.component';
import {WelcomepageComponent} from './components2/welcomepage/welcomepage.component';
import {CreateSubjectComponent} from './create-subject/create-subject.component';
import {ListSubjectComponent} from './list-subject/list-subject.component';
import {NgbdModalContent} from "./errorcomponent/NgbdModalContent";
import {AddingMarksComponent} from './components/adding-marks/adding-marks.component';
import {AddMarkToStudentComponent} from './add-mark-to-student/add-mark-to-student.component';
import {CommonModule} from '@angular/common';
import {ShowStudentsComponent} from './show-students/show-students.component';
import {HomeComponent} from "./authComponent/home/home.component";
import {RegisterComponent} from "./authComponent/register/register.component";
import {authInterceptorProviders} from "../_helpers/auth.interceptor";
import {LoginComponent} from "./authComponent/login/login.component";
import {ProfileComponent} from "./authComponent/profile/profile.component";
import {BoardAdminComponent} from "./authComponent/board-admin.component";
import {GradesComponent} from './grades/grades.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateSubjectComponent,
    CreateStudentComponent,
    StudentDetailsComponent,
    StudentListComponent,
    AddMarkToStudentComponent,
    WelcomepageComponent,
    NgbdModalContent,
    ListSubjectComponent,
    AddingMarksComponent,
    ShowStudentsComponent,


//auth modules
    HomeComponent,RegisterComponent,LoginComponent,ProfileComponent,BoardAdminComponent, GradesComponent
  ],
  imports: [
    HttpClientModule,
  ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
