import { Component, OnInit ,Input} from '@angular/core';
import {StudentService} from "../services/student.service";
import {Student} from "../students/student";

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {
 studentList:Student[];
   constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.getStudentList()
  }
  getStudentList(): void{
    this.studentService.getStudents().subscribe(sList =>this.studentList=sList);
  }

}
