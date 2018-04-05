import { Component, OnInit } from '@angular/core';
import { AdvancePayment } from './advance-payment';

@Component({
  selector: 'app-ask-for-advance-payment',
  templateUrl: './ask-for-advance-payment.component.html',
  styleUrls: ['./ask-for-advance-payment.component.css']
})
export class AskForAdvancePaymentComponent implements OnInit {

  constructor() { }
  newForm=new AdvancePayment();
  ngOnInit() {
  }
  submitted = false;

  onSubmit() { this.submitted = true; }

}
