import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Subject} from "../models/subject.model";
import {SubjectService} from "../services/subject.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
declare var $: any; // Add this line
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalContent} from "../errorcomponent/NgbdModalContent";
import {HttpStatusCode} from "@angular/common/http";


@Component({

  selector: 'app-list-subject',
  templateUrl: './list-subject.component.html',
  styleUrls: ['./list-subject.component.css']
})
export class ListSubjectComponent implements OnInit{
  errorMessage!: string;
  subjects: Subject[];

  dtTrigger: Subject= new Subject();

  student : Subject=new Subject();
  deleteMessage=false;
  studentlist:any;
  isupdated = false;


  constructor(private SubjectService: SubjectService,private modalService: NgbModal,
  private router: Router) {
    this.subjects = [];
  }
  ngOnInit() {
    this.getSubjects();
    // initialize the modals
    $('#updateSubjectModal').modal({ backdrop: 'static', keyboard: false });
    $('#updateSubjectErrorModal').modal({ backdrop: 'static', keyboard: false });
  }

  // method to hide the modals
  hideModal(modalId: string) {
    $('#' + modalId).modal('hide');
  }


  private getSubjects(){
    this.SubjectService.getSubjectsList().subscribe(data => {
      console.log("hey there",data);
      this.subjects = data;
    });
  }

  SubjectDetails(id: number){
    this.router.navigate(['Subject-details', id]);
  }

  updateSubject(id: number){
    this.router.navigate(['update-Subject', id]);
  }

  deleteSubject(id: number){
    this.SubjectService.deleteSubject(id).subscribe( data => {
      console.log(data);
      this.getSubjects();
    })
  }

  updateStudent(id: number){
    this.SubjectService.getSubjectById(id)
      .subscribe(
        data => {
          this.studentlist=data
        },
        error => console.log(error));
  }


/*  subjectForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    fullMarks: new FormControl('', [Validators.required, Validators.min(1)]),
    passMarks: new FormControl('', [Validators.required, Validators.min(1)])
  });*/
/*  subjectUpdateForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    code: new FormControl(),
    fullMarks: new FormControl(),
    passMarks: new FormControl(),

  });*/
  subjectUpdateForm: FormGroup<{ fullMarks: FormControl<any>; passMarks: FormControl<any>; code: FormControl<any>; name: FormControl<any>; id: FormControl<any> }> = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    code: new FormControl(),
    fullMarks: new FormControl(),
    passMarks: new FormControl(),
  });



  openUpdateSubjectModal(subject: Subject) {
    // Set the form values to the selected subject
    this.subjectUpdateForm.patchValue({
      id: subject.id,
      name: subject.name,
      code: subject.code,
      fullMarks: subject.fullMarks,
      passMarks: subject.passMarks,
    });

    // Show the modal
    $('#updateSubjectModal').modal('show');
  }

  updateSubjects() {
    // Get the updated values from the form
    const updatedSubject: Subject = <Subject>this.subjectUpdateForm.value;

    // Call your API or service to update the subject
    this.SubjectService.updateSubject(updatedSubject.id,updatedSubject).subscribe(() => {
      // Reload the subject list
      this.getSubjects();

      // Hide the modal
      // ($('#updateSubjectModal') as JQueryStatic).modal('hide');
      $('#updateSubjectModal').modal('hide');
    },
      error => {
        // handle error
        console.log(error);

        console.log("consoling the rr"+ error.error +"error ko status ni auxa ra"+error.status);
        this.errorMessage = error.message;

     /*   const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.title = 'Error';
        modalRef.componentInstance.content = error.error;
        */
        if(error.status === 409)
        {
          this.errorMessage = `Subject with the code ${updatedSubject.id} already exists`;
        }
      /*  if ( error.error  === 'This should be application specificSubject with code  not found with sd : \' already exists\'') {
        // if (error.status=== HttpStatusCode.Ok && error.error  === 'This should be application specificSubject with code  not found with sd : \' already exists\'') {
          console.log("Yeshma", "aulata","aleready exists")
          this.errorMessage = 'Subject with the code already exists';
        } */else {
          this.errorMessage = 'An error occurred while updating the subject';
          console.log("Yeshma", "aulata")
        }
        $('#updateSubjectErrorModal').modal('show');
      }
    )
  }


}
