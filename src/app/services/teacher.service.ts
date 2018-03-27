import { Injectable } from '@angular/core';
import { teacher } from '../Teacher/mock-teacher'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {TEACHER} from '../Teacher/teacher/teacher';

@Injectable()
export class TeacherService {

  constructor() { }
 getTeachers():Observable<TEACHER[] >{
   return of(teacher);
 }
}
