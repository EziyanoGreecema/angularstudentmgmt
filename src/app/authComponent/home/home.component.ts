import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/auth/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: "H!!";

  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {

  }

  login() {
    this.router.navigate([ 'login']);
  }
  signup() {
    this.router.navigate([ 'register']);
  }


}
