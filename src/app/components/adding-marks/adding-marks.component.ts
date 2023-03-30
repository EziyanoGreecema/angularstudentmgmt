/*import {Component, Inject, OnInit} from '@angular/core';
    import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
    import { SubjectService } from '../../services/subject.service';
    import { Subject } from '../../models/subject.model';


    @Component({
      selector: 'app-adding-marks',
      templateUrl: './adding-marks.component.html',
      styleUrls: ['./adding-marks.component.css']
    })
    export class AddingMarksComponent implements OnInit {
      form!: FormGroup;
      selectedSubjects: Subject[] = [];
      disableMarks: boolean[] = [];

      constructor(private formBuilder: FormBuilder,  private subjectService: SubjectService) { }

      ngOnInit(): void {
        this.getSubjects();
        this.form = this.formBuilder.group({
      orders: this.formBuilder.array([])
    });
  }

  private getSubjects(): void {
    this.subjectService.getSubjectsList().subscribe(
      (data: Subject[]) => {
        console.log('Subjects loaded', data);
        this.selectedSubjects = data;
        this.addCheckboxes();
      },
      (error: any) => {
        console.log('Error loading subjects:', error);
      }
    );
  }

  private addCheckboxes(): void {
    // const ordersFormArray = this.form.controls.orders as FormArray;
    const ordersFormArray = this.form.controls['orders'] as FormArray;
    this.selectedSubjects.forEach((subject: Subject) => {
      ordersFormArray.push(
        this.formBuilder.group({
          subject: [subject.id, Validators.required],
          marks: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
        })
      );
      this.disableMarks.push(true);
    });
  }

  get ordersFormArray(): FormArray {
    // return this.form.controls.orders as FormArray;
    return this.form.controls['orders'] as FormArray;
  }

  toggleMarks(checked: boolean, index: number): void {
    this.disableMarks[index] = !checked;
    const marksControl = this.ordersFormArray.at(index).get('marks');
    if (checked) {
      if (marksControl) {
        marksControl.enable();
      }
    } else {
      if (marksControl) {
        marksControl.disable();
      }
    }
  }

  submit(): void {
    console.log(this.form.value);
  }
}*/

/*
// working code -3
import {Component, Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { SubjectService } from '../../services/subject.service';
import { Subject } from '../../models/subject.model';

@Component({
  selector: 'app-adding-marks',
  templateUrl: './adding-marks.component.html',
  styleUrls: ['./adding-marks.component.css']
})
export class AddingMarksComponent implements OnInit {
  form!: FormGroup;
  selectedSubjects: Subject[] = [];

  constructor(private formBuilder: FormBuilder, private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.getSubjects();
    this.form = this.formBuilder.group({
      orders: this.formBuilder.array([])
    });
  }

  private getSubjects(): void {
    this.subjectService.getSubjectsList().subscribe(
      (data: Subject[]) => {
        console.log('Subjects loaded', data);
        this.selectedSubjects = data;
        this.addCheckboxes();
      },
      (error: any) => {
        console.log('Error loading subjects:', error);
      }
    );
  }

  private addCheckboxes(): void {
    const ordersFormArray = this.form.controls['orders'] as FormArray;
    this.selectedSubjects.forEach((subject: Subject) => {
      ordersFormArray.push(
        this.formBuilder.group({
          subject: [subject.id, Validators.required],
          marks: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
        })
      );
    });
  }

  submit(): void {
    console.log(this.form.value);
  }

  get ordersFormArray(): FormArray {
    return this.form.controls['orders'] as FormArray;
  }
}*/


// working component2 html1
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { SubjectService } from 'src/app/services/subject.service';
import {Subject} from "../../models/subject.model";
import {AddMarksServiceService} from "../../services/add-marks-service.service";

@Component({
selector: 'app-adding-marks',
templateUrl: './adding-marks.component.html',
styleUrls: ['./adding-marks.component.css']
})
export class AddingMarksComponent implements OnInit {

form!: FormGroup;
selectedSubjects!: Subject[];

constructor(private formBuilder: FormBuilder, private subjectService: SubjectService,private marksService:AddMarksServiceService) {
  this.form = new FormGroup({
    orders: new FormArray([])
  });
  this.selectedSubjects=[]

}

  ngOnInit(): void {
    this.getSubjects();
    this.form = this.formBuilder.group({
      orders: this.formBuilder.array([])
    });}

  private getSubjects(): void {
    this.subjectService.getSubjectsList().subscribe(
      (data: Subject[]) => {
        console.log('Subjects loaded', data);
        this.selectedSubjects = data;
        this.addCheckboxes();
      },
      (error: any) => {
        console.log('Error loading subjects:', error);
      }
    );
  }




get ordersFormArray() {
  return this.form.controls['orders'] as FormArray;
}



// addCheckboxes() {
// /*   this.selectedSubjects.forEach(() => {
//     this.ordersFormArray.push(this.formBuilder.group({
//       subject: '',
//       marks: ''
//     }));
//   });*/
//       this.selectedSubjects.forEach((subject) => {
//         this.ordersFormArray.push(this.formBuilder.group({
//           subject: subject.id, // set subject value to subject ID
//           marks: ''
//         }));
//       });
//
//   const selectedOrders: { subjectId: string, marks: string }[] = this.form.value.orders
//     .filter((order: any) => order.subject && order.marks)
//     .map((order: any, index: number) => {
//       return { subjectId: this.selectedSubjects[index].id, marks: order.marks };
//     });
//   console.log(selectedOrders);
//
//
// }

/*
  private addCheckboxes(): void {
    const ordersFormArray = this.form.controls['orders'] as FormArray;
    this.selectedSubjects.forEach((subject: Subject) => {
      ordersFormArray.push(
        this.formBuilder.group({
          subject: [subject.id, Validators.required],
          marks: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
        })
      );
    });
  }
*/

  private addCheckboxes(): void {
    // const ordersFormArray = this.form.controls.orders as FormArray;
    const ordersFormArray = this.form.controls['orders'] as FormArray;
    this.selectedSubjects.forEach((subject: Subject) => {
      ordersFormArray.push(
        this.formBuilder.group({
          subject: [subject.id, Validators.required],
          marks: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
        })
      );
    });
  }
/*

  get ordersFormArray(): FormArray {
    // return this.form.controls.orders as FormArray;
    return this.form.controls['orders'] as FormArray;
  }
*/



    submit() {
/*   const selectedOrders = this.form.value.selectedSubjects.filter((order: any) => order.subject);
  console.log(selectedOrders);
*/


    /*const selectedOrders: { subject: string, marks: string }[] = this.form.value.orders
      .filter((order: any) => order.subject && order.marks)
      .map((order: any) => {
        return { subject: order.subject, marks: order.marks };
      });
    console.log(selectedOrders);
*/
  console.log( this.form.value.orders)
  const selectedOrders: { subject: string, marks: string }[] = this.form.value.orders
    .filter((order: any) => order.subject && order.marks)
    .map((order: any) => {
      return { subject: order.subject.id, marks: order.marks };
    });
  console.log(selectedOrders);



}

}


/*


Myworking code
import {Component, OnInit} from "@angular/core";
import {SubjectService} from "../../services/subject.service";
import {Subject} from "../../models/subject.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';


@Component({
  selector: 'app-adding-marks',
  templateUrl: './adding-marks.component.html',
  styleUrls: ['./adding-marks.component.css']
})
export class AddingMarksComponent implements OnInit {

  form: FormGroup;
  selectedSubjects :Subject[];
  ngOnInit() {
    this.getSubjects()

  }
  public getSubjects()
  {
    this.subjectService.getSubjectsList().subscribe(data => {
        console.log("hey there", data);
        this.selectedSubjects = data;
        this.addCheckboxes(); //
      },
      error => {
        console.log("hmm lets log the error" + error.status, error.type, error.title, error.detail)
      }
    );
  }

  get ordersFormArray() {
    return this.form.controls['orders'] as FormArray;
  }

  constructor(private formBuilder: FormBuilder,private subjectService:SubjectService) {
    this.form = this.formBuilder.group({
      orders: new FormArray([])
    });
    this.selectedSubjects = [];

    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.selectedSubjects.forEach(() => this.ordersFormArray.push(new FormControl(false)));
  }

  submit() {
    const selectedOrderIds = this.form.value.orders
      .map((checked: boolean, i: number) => checked ? this.selectedSubjects[i].id : null)
      .filter((v: number) => v !== null);
    console.log(selectedOrderIds);
  }

  finishedSelctingSubject()
  {
    console.log("what after selecting subject",this.selectedSubjects)
  }
}


*/


/*import {Component, OnInit} from "@angular/core";
import {SubjectService} from "../../services/subject.service";
import {Subject} from "../../models/subject.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-adding-marks',
  // templateUrl: './adding-marks.component.html',
  template:`

<form [formGroup]="subjectMarksForm" (ngSubmit)="onSubmit()">
<div formArrayName="subjects">
<div *ngFor="let subject of subjectMarksForm.get('subjects').controls; let i=index" [formGroupName]="i">
  <h4>{{ subject.value.name }}</h4>
<p>Full Marks: {{ subject.value.fullMarks }}</p>
<p>Pass Marks: {{ subject.value.passMarks }}</p>
<label>
Marks Obtained:
  <input type="number" formControlName="marksObtained">
  </label>
  </div>
  </div>
  <button type="submit">Submit</button>
  </form>
`,
styleUrls: ['./adding-marks.component.css']
})
export class AddingMarksComponent implements OnInit {

  subjects: Subject[] = [];
  subjectMarksForm: FormGroup;

  constructor(private fb: FormBuilder, private subjectService: SubjectService) {}

  ngOnInit() {

    this.subjectService.getSubjectsList().subscribe((subjects: Subject[]) => {
      this.subjects = subjects;
      this.createForm();
    });
  }
  public getSubjects()
  {
    this.subjectService.getSubjectsList().subscribe(data => {
        console.log("hey there", data);
        this.subjects = data;
      },
      error => {
        console.log("hmm lets log the error" + error.status, error.type, error.title, error.detail)
      }
    );
  }


  createForm() {
    const controls = this.subjects.map(subject =>
      this.fb.group({
        id: subject.id,
        name: subject.name,
        fullMarks: ['', Validators.required],
        passMarks: ['', Validators.required],
      })
    );

    this.subjectMarksForm = this.fb.group({
      subjects: this.fb.array(controls)
    });
  }

  onSubmit() {
    console.log(this.subjectMarksForm.value);
  }






}*/


/*
/!*
import {Component, Inject, OnInit} from '@angular/core';
import {StudentService} from "../../services/student.service";
import {Router} from "@angular/router";
import {Student} from "../../models/student.model";
import {SubjectService} from "../../services/subject.service";
import {Subject} from "../../models/subject.model";
import {GradeRequest} from "../../models/grade.request";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {mark} from "@angular/compiler-cli/src/ngtsc/perf/src/clock";
declare var $: any; // Add this line

/!*

import {MarkFormComponent} from "../MarkFormComponent";
// import {MarkFormComponent} from "../MarkFormComponent";

@Component({
  selector: 'app-adding-marks',
  templateUrl: './adding-marks.component.html',
  styleUrls: ['./adding-marks.component.css']
})
export class AddingMarksComponent implements OnInit {
  flag: boolean = false;
  gradeRequests: (GradeRequest | { studentId: number | undefined; marksObtained: number; subjectId: String })[] = [];

// create a function to add a grade request for a subject


  showMarkForm: boolean = false;
  studentName!: string;
  mathsMarks!: number;
  scienceMarks!: number;
  englishMarks!: number;




  markForm: FormGroup;

  onSubmitForm() {
    this.dialogRef.close(this.markForm.value);
  }


  onSubmit() {
    // Do something with the form data (e.g. save to a database)
    this.selectedStudent = null;
  }

  onSubmitAddingMarks() {
    console.log(this.gradeRequests)
    this.showMarkForm = false;
  }

  onSubmitSubject() {
    // assuming you have another API to send the list of checked subjects
    const checkedSubjects = this.alteredSubjects.filter(subject => subject.checked);
    console.log(checkedSubjects); // prints an array of checked subjects
    this.selectedSubjects = checkedSubjects;
    console.log(this.alteredSubjects); // prints an array of checked subjects
    this.flag = false;
    // send the array of checked subjects to another API using HttpClient or some other method
  }

  onSubjectSelection() {
    this.subjects != null ? this.flag = true : this.flag = false
  }

  onCancel() {
    this.selectedStudent = null;
    this.showMarkForm = false;
  }

  onCancelS() {
    this.flag = false;
  }

  students: Student[];
  subjects: Subject[];
  alteredSubjects: any[];

  selectedSubjects: any[];

  constructor(private StudentService: StudentService, private subjectService: SubjectService,
              private dialog: MatDialog,

              public dialogRef: MatDialogRef<AddingMarksComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private router: Router) {
    this.students = [];
    this.subjects = [];
    this.alteredSubjects = [];
    this.selectedSubjects = [];
    this.showMarkForm = false;
    this.markForm = data.markForm;

  }

  ngOnInit(): void {
    this.getStudents();
    this.getSubjects();

      this.markForm = this.fb.group({});
      for (let subject of this.data.subjects) {
      this.markForm.addControl(`marks_${subject.id}`, this.fb.control('', Validators.required));
    }


// initialize the modals
    $('#updateSubjectModal').modal({backdrop: 'static', keyboard: false});
    $('#updateSubjectErrorModal').modal({backdrop: 'static', keyboard: false});
  }


  private getStudents() {
    this.StudentService.getStudentList().subscribe(data => {
        console.log("hey there", data);
        this.students = data;
      },
      error => {
        console.log("hmm lets log the error" + error.status, error.type, error.title, error.detail)
      }
    );
  }

  private getSubjects() {
    this.subjectService.getSubjectsList().subscribe(data => {
        console.log("hey there can you get the subjects", data);
        this.subjects = data;
        this.alteredSubjects = this.subjects.map(subject => ({...subject, checked: false}));
      },
      error => {
        console.log("hmm lets log the error" + error.status, error.type, error.title, error.detail)
      }
    );
  }


  selectedStudent: Student | null = null;

  // onSelect(student: Student, event: Event) {
  //   // Check if the click event target is a button element
  //   if ((event.target as HTMLButtonElement).tagName.toLowerCase() === 'button') {
  //     return;
  //   }
  //   this.selectedStudent = student;
  // }

  onSelect(student: any, event: any): void {
    if ((event.target as HTMLButtonElement).tagName.toLowerCase() === 'button') {
      return;
    }
    this.selectedStudent = student;
    // this.showMarkForm = false;
    this.selectedSubjects = [];
  }


  onPutMarks(student: Student): void {

    const dialogRef = this.dialog.open(MarkFormComponent, {
      width: '500px',
      data: {
        student: student,
        subjects: this.selectedSubjects,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Save the marks here
      }
    });



    if (!this.showMarkForm) {
      this.showMarkForm = true;
    }
    // Create a Map to store the marks for each subject and student
    const marksMap = new Map<string, number>();

// Loop through the selected subjects and store the marks for each one
    for (const subject of this.selectedSubjects) {
      console.log(subject)
      const key = `${student?.id}-${subject.id}`;
      marksMap.set(key, subject.marks);
      console.log("seeing the setted marksmap")
      console.log(marksMap);
    }

// Loop through the marksMap and create the GradeRequest objects
    const gradeRequests: GradeRequest[] = [];
    marksMap.forEach((marks, key) => {
      const [studentId, subjectId] = key.split('-').map(Number);
      let gradeRequest: { studentId: number; marksObtained: number; subjectId: number };
      gradeRequest = {
        studentId,
        subjectId,
        marksObtained: marks
      };
      console.log("seeing the madeGrrade Reeuest")
      console.log(gradeRequest)
      gradeRequests.push(gradeRequest);
    });

    // const marksMap = new Map();
    // for (const subject of this.selectedSubjects) {
    //   marksMap.set(subject.id, subject.marks);
    // }
    this.onSaveMarks(marksMap, student.id);

  }

  /!*
    gradeRequests: GradeRequest[] = [];

  // create a function to add a grade request for a subject
    addGradeRequest(subjectId: number, marksObtained: number) {
      // create a new GradeRequest object
      const gradeRequest: GradeRequest = {
        subjectId,
        studentId: this.selectedStudent.id,
        marksObtained
      };
      // add the object to the array
      this.gradeRequests.push(gradeRequest);
    }*!/

  /!*  onSaveMarks(marksMap: Map<String, number>, student_id: number | undefined): void {
      // your implementation here
      console.log("consoling from DFS propagation"+marksMap);
      console.log(marksMap);
      const gradeRequests: GradeRequest[] = [];

      /!*
      marksMap.forEach((marks, subjectId) => {
        const existingRequest = this.gradeRequests.find(
          (request) => request.subjectId === subjectId
        );
        if (existingRequest) {
          existingRequest.marksObtained = marks;
        } else {
          const gradeRequest: { studentId: number | undefined; marksObtained: number; subjectId: String } = {
            studentId: student_id,
            marksObtained: marks,
            subjectId: subjectId,
          };
          this.gradeRequests.push(gradeRequest);
        }
      });*!/



      marksMap.forEach((marks, subjectId) => {
        const existingRequest = this.gradeRequests.find(
          // (request) => request.subjectId === parseInt(subjectId)
          (request) => request.subjectId === subjectId
      );
        if (existingRequest) {
          existingRequest.marksObtained = marks;
        } else {
          const gradeRequest: { studentId: number | undefined; marksObtained: number; subjectId: String } = {
            studentId: student_id,
            marksObtained: marks,
            subjectId: subjectId,
          };

  // Converting number value to string using template literal
          const existingRequest = this.gradeRequests.find((request) => request.studentId.toString() === student_id && request.subjectId === `${subjectId}`);
          const filteredRequests = this.gradeRequests.filter((request) => request.studentId.toString() !== student_id || request.subjectId !== `${subjectId}`);


          this.gradeRequests = [...filteredRequests, gradeRequest];
          this.gradeRequests.push(gradeRequest);

        }
      });


      // send the array of grade requests to the API
  /!*    this.gradeService.addGradeToStudent(this.gradeRequests).subscribe(
        (response) => {
          console.log(response);
          // reset the form and close the modal
          this.resetForm();
          this.showMarkForm = false;
        },
        (error) => {
          console.log(error);
        }
      );*!/
    }*!/

  onSaveMarks(marksMap: Map<string, number>, student_id: number | undefined): void {
    const gradeRequests: GradeRequest[] = [];

    marksMap.forEach((marks, key) => {
      const [studentId, subjectId] = key.split('-').map(Number);
      const existingRequest = this.gradeRequests.find(
        (request) => request.studentId === studentId && request.subjectId === subjectId
      );
      if (existingRequest) {
        existingRequest.marksObtained = marks;
      } else {
        const gradeRequest: GradeRequest = {
          studentId,
          marksObtained: marks,
          subjectId
        };
        gradeRequests.push(gradeRequest);
      }
    });

    // Filter out existing requests and add new requests
    const filteredRequests = this.gradeRequests.filter(
      (request) => request.studentId !== student_id
    );
    this.gradeRequests = [...filteredRequests, ...gradeRequests];
  }


//onSave(map:Map)
  onSelectSubjectandThenAddMarks() {
    // Check if the click event target is a button element
  }

  // onSelect(student: Student) {
  //   this.selectedStudent = student;
  // }
  onSave() {
    console.log("why is gradeRequest fully empty" + this.gradeRequests)
    console.log("write logive to save")
    console.log(this.gradeRequests)
    // implement save logic here
  }



}
*!/

@Component({
  selector: 'app-adding-marks',
  templateUrl: './adding-marks.component.html',
  styleUrls: ['./adding-marks.component.css']
})
export class AddingMarksComponent implements OnInit {
  flag: boolean = false;

  showMarkForm: boolean = false;

  showSubjectForm: boolean = false;
  students: Student[];
  subjects: Subject[];
  alteredSubjects: any[];
  selectedStudent: Student | null;
  selectedSubjects: any[];
  markForm: FormGroup;
  // Form to select a subject
  subjectForm: FormGroup;


  constructor(
    private StudentService: StudentService,
    private subjectService: SubjectService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.students = [];
    this.subjects = [];
    this.alteredSubjects = [];
    this.selectedSubjects = [];
    this.selectedStudent = null;
    this.markForm = this.fb.group({});
    this.subjectForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.getStudents();
    this.getSubjects();

/!*
    for (let subject of this.subjects) {
      this.markForm.addControl(`marks_${subject.id}`, this.fb.control('', Validators.required));
    }
*!/

    this.markForm = this.fb.group({});
    this.selectedSubjects.forEach(subject => {
      this.markForm.addControl(subject.id, this.fb.control('', [Validators.required, Validators.min(0), Validators.max(subject.fullMarks)]));
    });
  }


  private getStudents() {
    this.StudentService.getStudentList().subscribe(data => {
        console.log("hey there", data);
        this.students = data;
      },
      error => {
        console.log("hmm lets log the error" + error.status, error.type, error.title, error.detail)
      }
    );
  }

  private getSubjects() {
    this.subjectService.getSubjectsList().subscribe(subjects => {
        console.log("hey there can you get the subjects", subjects);
        this.subjects = subjects;
        this.alteredSubjects = this.subjects.map(subject => ({...subject, checked: false}));
      },
      error => {
        console.log("hmm lets log the error" + error.status, error.type, error.title, error.detail)
      }
    );
  }


  onSelect(student: Student, event: Event) {
      // Check if the click event target is a button element
      if ((event.target as HTMLButtonElement).tagName.toLowerCase() === 'button') {
        return;
      }
      this.selectedStudent = student;
    }


  onPutMarks(student: Student) {
   this.selectedStudent = student;/!*
    this.selectedSubjects = this.subjects;
    this.flag = true;*!/
    this.showMarkForm=true;
  }

  onCancel() {
    this.selectedStudent = null;
    this.selectedSubjects = [];
    this.flag = false;
    this.showMarkForm=false;
    this.showSubjectForm=false;


  }
  /!*  onSubmit() {
    const marks: {[key: number]: number} = {};
    for (const subject of this.selectedSubjects) {
      const marksControlName =  subject.id;
      marks[subject.id] = <number>this.markForm.get(marksControlName)?.value;
    }
    console.log(marks);
    // You can do further processing with the marks data here
  }
*!/
  onSubmit() {
    // const marks = {};
    const marks: {[key: string]: any} = {};

    Object.keys(this.markForm.controls).forEach(key => {
      marks[key] = this.markForm.controls[key].value;

    });
    console.log("wanna see the selected subject and thier marks")
    console.log(marks);
  }
/!*
  onSubmit() {
    console.log("can you see me on choosing subjects")


  // const marks = {};
/!*
    const  marks: { [key: number]: number } = {};

    this.subjects.forEach(subject => {
      const markControl = this.markForm.get(`marks_${subject.id}`);
      if (markControl) {
        marks[subject.id] = markControl.value;
      }
      console.log(marks)
      console.log("consiling the marks above"+marks)
    });
*!/
 /!*   const  marks: { [key: number]: number } = {};

    for (let subject of this.subjects) {
      const markControl = this.markForm.get(`marks_${subject.id}`);
      if (markControl && markControl.value !== '') {
        marks[subject.id] = markControl.value;
      }
    }
    // TODO: submit the marks to the API and save them
    console.log(marks);

    this.selectedStudent = null;
    this.selectedSubjects = [];
    this.flag = false;*!/
  }*!/


/!*  onSubjectSubmit() {
    console.log("can you see me on choosing subjects")
    console.log(this.selectedSubjects)
    console.log(this.alteredSubjects)
    this.showSubjectForm=false;
  }*!/
  onSubjectSelection() {
    this.showSubjectForm=true;
    console.log("onsubject selection")
    console.log(this.subjects);
    // Define the code to handle subject selection
  }

  onSave() {
    console.log(this.selectedSubjects)
    console.log(this.selectedStudent)
    // Define the code to handle saving of marks
  }

  onSubmitSubject() {
    // assuming you have another API to send the list of checked subjects
    const checkedSubjects = this.alteredSubjects.filter(subject => subject.checked);
    console.log(checkedSubjects); // prints an array of checked subjects
    this.selectedSubjects = checkedSubjects;
    console.log("selectedSubjects list")
    console.log(this.selectedSubjects)
    console.log(this.alteredSubjects); // prints an array of checked subjects
    this.showSubjectForm = false;
    // send the array of checked subjects to another API using HttpClient or some other method
  }
}
*!/

// second working

/!*import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-subject-marks-form',
  template: `
    <form [formGroup]="subjectForm" *ngIf="!showMarkForm">
      <div class="form-group">
        <label>Select Subject</label>
        <select class="form-control" formControlName="subject">
          <option *ngFor="let subject of subjects" [value]="subject.id">{{subject.name}}</option>
        </select>
      </div>
      <button type="button" class="btn btn-primary" (click)="showMarkForm = true">Select</button>
    </form>

    <form [formGroup]="markForm" *ngIf="showMarkForm">
      <h4>Student Name: {{ selectedStudent.firstName }}</h4>
      <h4>Subject: {{ selectedSubject?.name }}</h4>
      <div class="form-group">
        <label>Marks:</label>
        <input type="number" class="form-control" formControlName="marks" required>
      </div>
      <button type="submit" class="btn btn-primary" [disabled]="!markForm.valid">Add Marks</button>
      <button type="button" class="btn btn-danger" (click)="showMarkForm = false">Cancel</button>
    </form>
  `
})
export class AddingMarksComponent implements OnInit {
  subjectForm: FormGroup;


  markForm: FormGroup;
  subjects = [
    {id: 1, name: 'Maths'},
    {id: 2, name: 'Science'},
    {id: 3, name: 'English'},
  ];
  selectedStudent = {firstName: 'John', lastName: 'Doe', id: 1};
  selectedSubject: {id: number, name: string} | null = null;
  showMarkForm = false;

  constructor(private fb: FormBuilder) {
    this.subjectForm = this.fb.group({
      subject: ['', Validators.required]
    });

    this.markForm = this.fb.group({
      marks: ['', Validators.required]
    });
  }

  onSubmitSubject() {
   /!* this.selectedSubject = this.subjects.find(subject => subject.id === +this.subjectForm.value.subject);
    if (!this.selectedSubject) {
      // handle the case where no subject was found
    }*!/

    const selectedSubjectId = +this.subjectForm.value.subject;
    this.selectedSubject = this.subjects.find(subject => subject.id === selectedSubjectId) || null;
    this.showMarkForm = true;

  }

  onSubmitMarks() {
    const marks = this.markForm.value.marks;
    console.log(`Student ${this.selectedStudent.firstName} got ${marks} marks in ${this.selectedSubject?.name}`);
    // Add code here to save the marks
    this.showMarkForm = false;
    this.selectedSubject = null;
    this.markForm.reset();
  }

  ngOnInit(): void {
  }
}*!/


import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';


import {Student} from "../../models/student.model";
import {Subject} from "../../models/subject.model";
import {StudentService} from "../../services/student.service";
import {SubjectService} from "../../services/subject.service";
interface Marks {
  [key: string]: number;
}

interface UserProfile {
  firstName: string;
  lastName: string;
  age: number;
}


@Component({
  selector: 'app-adding-marks',
  // templateUrl: './adding-marks.component.html',
  styleUrls: ['./adding-marks.component.css'],
  template: `
    <button (click)="createForm()"></button>
    <form [formGroup]="subjectForm" (ngSubmit)="onSubmit()">
      <div formArrayName="subjects">
        <div *ngFor="let subject of subjectForm.get('subjects').controls; let i=index" [formGroupName]="i">
          <label>
            <input type="checkbox" formControlName="checked">{{ subjects[i].name }}
          </label>


        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
    \`
  `
})
export class AddingMarksComponent implements OnInit {

lastFlag:Boolean=false;
  userProfile: UserProfile = {
    firstName: '',
    lastName: '',
    age: 0,
  };
  marks: Marks = {};
  onSubjectSubmit123() {
    const selectedSubjects = this.subjectForm.value.subjects
      .filter(subject => subject.checked)
      .map(subject => ({ id: subject.id, name: subject.name }));

    console.log(selectedSubjects);
  }



  email = new  FormControl('');


  createForm() {
    this.lastFlag=true;
    const controls = this.subjects.map(subject => this.fb.group({
      id: subject.id,
      name: subject.name,
      checked: false
    }));

    this.subjectForm = this.fb.group({
      subjects: this.fb.array(controls)
    });
  }


  updateEmail()
  {
    console.log(this.userProfileForm.value)
    const formValues = this.userProfileForm.value;
    console.log("consoling the fomrvalues")
    console.log(formValues)
    // this.userProfile={   firstName: formValues.firstName,
    //   lastName: formValues.lastName,
    //   age: formValues.age,}

    // Update the user profile
    const userProfile: UserProfile = {
      firstName: this.userProfileForm.value.firstName || '',
      lastName: this.userProfileForm.value.lastName || '',
      age: parseInt(<string>this.userProfileForm.value.age, 10) || 0
    };
    console.log(userProfile);
  }


  students: Student[] = [];
  subjects: Subject[] = [];
  selectedStudent: Student | null = null;
  selectedSubjects: Subject[] = [];
  selectedSubject: Subject | null = null;
  markForm: FormGroup;
  subjectForm: FormGroup;
  showMarkForm = false;

  userProfileForm: FormGroup;
  subjectForm1: FormGroup;




  constructor(private studentService: StudentService,private subjectService:SubjectService,private fb: FormBuilder) {
    this.markForm = this.fb.group({});
    this.subjectForm = this.fb.group({
      subjects: [[]]
    });
    this.userProfileForm= this.fb.group({})



  }


  ngOnInit(): void {
    console.log("herdinnata k hunxa on email before writing")
    console.log(this.email.value)
   this.getStudents()

    this.getSubjects();

    for (const subject of this.subjects) {
      this.markForm.addControl(subject.id.toString(), this.fb.control('', Validators.required));
    }
      }




  private getStudents() {
    this.studentService.getStudentList().subscribe(data => {
        console.log("hey there", data);
        this.students = data;
      },
      error => {
        console.log("hmm lets log the error" + error.status, error.type, error.title, error.detail)
      }
    );
  }

  private getSubjects() {
    this.subjectService.getSubjectsList().subscribe(data => {
        console.log("hey there can you get the subjects", data);
        this.subjects = data;
        // this.alteredSubjects = this.subjects.map(subject => ({...subject, checked: false}));
      },
      error => {
        console.log("hmm lets log the error" + error.status, error.type, error.title, error.detail)
      }
    );
  }


  onStudentSelected(student: Student): void {
    this.selectedStudent = student;
    this.showMarkForm = true;
  }

  onCancel(): void {
    this.showMarkForm = false;
    this.selectedStudent = null;
    this.selectedSubjects = [];
    this.subjectForm.reset();
    this.markForm.reset();
  }

  onSubmitSubject(): void {
    this.selectedSubjects = [];
    for (const subject of this.subjectForm.value.subjects) {
      const selectedSubject = this.subjects.find(s => s.id === subject);
      if (selectedSubject) {
        this.selectedSubjects.push(selectedSubject);
      }
    }
    this.showMarkForm = true;
  }

  onSubmitMarks(): void {
    const marks: Marks = {};
    for (const key in this.markForm.controls) {
      if (Object.prototype.hasOwnProperty.call(this.markForm.controls, key)) {
        marks[key] = this.markForm.controls[key].value;
      }
    }
    const result = {
      student: this.selectedStudent?.id,
      marks: marks
    };
    console.log(result);
    this.showMarkForm = false;
    this.selectedStudent = null;
    this.selectedSubjects = [];
    this.subjectForm.reset();
    this.markForm.reset();
  }

}


*/


