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
  attendance:boolean;
  selectedStudent:Student;
  constructor(private studentService:StudentService ) { }
  getStudents(): void{
    this.studentService.getStudents().subscribe(sList  => this.studentList=sList);

  }
  attendanceList=[];
  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit() {
    this.getStudents()
  }
  onSelect(name:string):void{
    if(this.attendanceList.indexOf(name)==-1){
       this.attendanceList.push(name);}

  }
  delete():void{
     var id =  this.attendanceList.indexOf(this.selectedStudent);
     this.attendanceList.splice(id,1);
     this.selectedStudent=null
  }
  select(student:Student){
    this.selectedStudent=student;
  }
}
