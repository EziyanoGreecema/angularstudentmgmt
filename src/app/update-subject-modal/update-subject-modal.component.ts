/*
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {MAT_DIALOG_DATA,MdDialogRef,MD_DIALOG_DATA, MatDialogRef} from "@angular/material";
*/

/*
import {Component, Inject, OnInit, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';*/

import { MatDialog } from '@angular/material/dialog';
import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

import {from} from "rxjs";


@Component({
  selector: 'app-update-subject-modal',
  templateUrl: './update-subject-modal.component.html',
  styleUrls: ['./update-subject-modal.component.css']
})
/*
export class UpdateSubjectModalComponent {
  constructor(

    public dialogRef: MatDialogRef<any>,

    // public dialogRef: MatDialogRef<UpdateSubjectModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }


  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(CourseDialogComponent, dialogConfig);
  }
  onSaveClick(): void {
    /!* save updated data and close the modal *!/
    this.dialogRef.close();
  }
}

*/
/*

export class ErrorDialogContentComponent implements OnInit {

  constructor(    public dialogRef: MatDialogRef<ErrorDialogContentComponent>,
                  @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }
  onClose(): void {
    console.log(this.dialogRef.disapble); // Returns false
    this.dialogRef.close(); // does not close the dialog
  }

}



*/




@Component({
  selector: 'app-update-student-modal',
  template: `
    <h2>Update Student</h2>
    <form>
      <!-- Add form fields for updating the student -->
    </form>
    <button mat-button (click)="onCancel()">Cancel</button>
    <button mat-raised-button color="primary" (click)="onSave()">Save</button>
  `,
})
export class UpdateStudentModalComponent {
  constructor(
    public dialogRef: MatDialogRef<UpdateStudentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    /* Save the updated student data and close the modal */
    this.dialogRef.close();
  }
}
