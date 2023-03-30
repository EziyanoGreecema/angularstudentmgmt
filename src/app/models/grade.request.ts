/*
export interface GradeRequest {
  subjectId: number  | undefined;
  studentId: number;
  marksObtained: number;
}
*/

/*
export interface GradeRequest {
  studentId: number | undefined;
  marksObtained: number;
  subjectId: string;
}
*/

export class GradeRequest {
  studentId: number;
  marksObtained: number;
  subjectId: number;


  constructor(studentId: number, marksObtained: number, subjectId: number) {
    this.studentId = studentId;
    this.marksObtained = marksObtained;
    this.subjectId = subjectId;
  }
};
