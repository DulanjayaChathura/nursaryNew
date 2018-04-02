import { Component, OnInit,Input } from '@angular/core';
import {StudentService} from "../services/student.service";
import {Student} from "../students/student";
import {AttendanceSheet} from "./attendance-sheet";
@Component({
  selector: 'app-attendance-sheet',
  templateUrl: './attendance-sheet.component.html',
  styleUrls: ['./attendance-sheet.component.css']
})
export class AttendanceSheetComponent implements OnInit {

  studentList :Student[];
  selectedStudent:Student;
  constructor(private studentService:StudentService ) { }
  getStudents(): void{
    this.studentService.getStudents().subscribe(sList  => this.studentList=sList);

  }
  newForm=new AttendanceSheet();
  onSelect(student:Student):void{
    this.selectedStudent=student;
  }
  ngOnInit() {
    this.getStudents()
  }

}
