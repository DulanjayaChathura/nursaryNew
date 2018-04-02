import { Component, OnInit } from '@angular/core';
import { ContactForm } from "./contact-form";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  submitted = false;

  onSubmit() { this.submitted = true; }
  newForm=new ContactForm("123","Chathura","abcdefghijaklmanop");
  get diagnostic() { return JSON.stringify(this.newForm); }
}
