import { Component, OnInit } from '@angular/core';
import {  HomeworkForm } from './homework-form';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {

  constructor() { }
 newForm=new HomeworkForm();
  ngOnInit() {
  }

}
