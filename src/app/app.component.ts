import { Component } from '@angular/core';
import {NameService} from './services/name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 constructor(public nameService:NameService){}
}
