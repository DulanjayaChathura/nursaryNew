import { Component, OnInit,Input } from '@angular/core';
import {AccountLogin} from './account-login';


@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.css']
})

export class AccountLoginComponent implements OnInit {
  constructor() { }
  account=new AccountLogin();
  name=this.account.userName
  ngOnInit() {
  }

}
export var name
