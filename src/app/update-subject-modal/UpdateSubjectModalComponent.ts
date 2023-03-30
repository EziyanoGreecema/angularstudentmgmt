import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-subject-modal',
  templateUrl: './update-subject-modal.component.html',
  styleUrls: ['./update-subject-modal.component.css']
})
export class UpdateSubjectModalComponent {
  subjectForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    fullMarks: new FormControl('', [Validators.required, Validators.min(1)]),
    passMarks: new FormControl('', [Validators.required, Validators.min(1)])
  });

  constructor(
    public dialogRef: MatDialogRef<UpdateSubjectModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.subjectForm.patchValue(this.data.subject);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    const updatedSubject = {
      id: this.data.subject.id,
      name: this.subjectForm.get('name')?.value,
      code: this.subjectForm.get('code')?.value,
      fullMarks: this.subjectForm.get('fullMarks')?.value,
      passMarks: this.subjectForm.get('passMarks')?.value
    };
    /* Save updated subject data and close the modal */
    this.dialogRef.close(updatedSubject);
  }
}
