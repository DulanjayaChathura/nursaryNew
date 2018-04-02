import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedbtn:string;
 onselect(id:string):void{
   this.selectedbtn=id;
 }
}
