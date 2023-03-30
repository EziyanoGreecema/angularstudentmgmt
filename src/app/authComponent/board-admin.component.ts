import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/auth/user.service";

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  // styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard(7).subscribe({
      next: data => {
        console.log(data)
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
  }
}
