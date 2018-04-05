import { Component, OnInit } from '@angular/core';
import {TEACHER} from './teacher';
import {TeacherService} from '../../services/teacher.service';
import {NameService} from '../../services/name.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})

export class TeacherComponent implements OnInit {
  selectedTeacher: TEACHER;
  teachers: TEACHER[];
  nameLoggedIn:string;

  constructor(private teacherService: TeacherService
  private nameService: NameService) { }

  ngOnInit() {
    this.getTeachers();
    this.getLoggedInName();
  }

  onSelect( steacher: TEACHER ): void{
    this.selectedTeacher = steacher;
  }

  getTeachers(): void {
    this.teacherService.getTeachers().subscribe(teachers => this.teachers = teachers);
  }
  getLoggedInName():void{
    this.nameService.getLoggedIn().subscribe(teacher=>this.nameLoggedIn=teacher);
  }

}
