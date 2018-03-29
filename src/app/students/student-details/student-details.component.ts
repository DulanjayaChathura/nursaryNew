import { Component, OnInit } from '@angular/core';
import {MockStudent} from "../mock-student"
import {Student} from "../student";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  studentList :Student[]
  constructor(private studentService:StudentService ) { }
  getStudents(): void{
    this.studentService.getStudent().subscribe(sList =>this.studentList=sList);

  }
  ngOnInit() {
    this.getStudents()
  }



}
