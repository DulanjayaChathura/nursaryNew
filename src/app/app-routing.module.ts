import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountLoginComponent }      from './account-login/account-login.component';

import { TeacherComponent} from './Teacher/teacher/teacher.component';

const routes: Routes = [
{ path: 'AccountLogin', component: AccountLoginComponent },
{  path: 'teacher', component: TeacherComponent }

];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {


}
