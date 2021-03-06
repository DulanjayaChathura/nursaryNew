import { Component, OnInit ,Input} from '@angular/core';
import {MockStudent} from "../mock-student"
import {Student} from "../student";
import {StudentService} from "../../services/student.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
 @Input()  selectedStudent:Student;
   constructor(private studentService:StudentService,
    private route: ActivatedRoute,
    private location: Location ) { }

  ngOnInit() {

    this.getStudent()
  }
 markAttendance(student:Student){
   student.attendance=true;
 }
 getStudent(){
     const regNo = this.route.snapshot.paramMap.get('regNo');
     this.studentService.getStudent(regNo).subscribe(student=>this.selectedStudent=student);
 }

}
