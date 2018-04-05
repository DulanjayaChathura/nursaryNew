
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {name} from '../account-login/account-login.component';

@Injectable()
export class NameService {

  constructor() { }
  getLoggedIn():Observable<string>{
    return of(name);
  }

}
