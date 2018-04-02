import { Component, OnInit } from '@angular/core';
import {LeaveForm} from './leave-form';
@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.css']
})

export class LeaveApplicationComponent implements OnInit {

  constructor() { }
 newForm=new LeaveForm();
  ngOnInit() {
  }

}
