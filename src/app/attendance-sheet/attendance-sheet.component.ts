import { Component, OnInit,Input } from '@angular/core';
import {StudentService} from "../services/student.service";
import {Student} from "../students/student";
@Component({
  selector: 'app-attendance-sheet',
  templateUrl: './attendance-sheet.component.html',
  styleUrls: ['./attendance-sheet.component.css']
})
export class AttendanceSheetComponent implements OnInit {
  @Input() student: Student;
  studentList :Student[];
  selectedStudent:Student;
  constructor(private studentService:StudentService ) { }
  getStudents(): void{
    this.studentService.getStudent().subscribe(sList  => this.studentList=sList);

  }
  onSelect(student:Student):void{
    this.selectedStudent=student;
  }
  ngOnInit() {
    this.getStudents()
  }

}
