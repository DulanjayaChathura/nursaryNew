import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {Student} from '../students/student';
import {students} from '../students/mock-student';
@Injectable()
export class StudentService {

  getStudents():Observable<Student[]>{
     return of(students);

  }
  constructor() { }
 getStudent(regNo:string): Observable<Student>{
     return of(students.find(student => student.regNo === regNo));
 }


}
