import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {TokenStorageService} from "../../services/auth/token-storage.service";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  flag:boolean=false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  // viewResult: any[] = [];
  grades: any[] = [];
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private studentService:StudentService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }
  onViewResult(): void {
    this.flag=false
    var studentEmail=this.tokenStorage.getUser().email
    this.studentService.viewResult(studentEmail).subscribe((data:any)=>
        this.grades = data


      ,error => console.log(error))

  }

  reloadPage(): void {
    window.location.reload();
  }
}
