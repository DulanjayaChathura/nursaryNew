import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountLoginComponent }      from './account-login/account-login.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SalarySheetComponent } from './salary-sheet/salary-sheet.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { AskForAdvancePaymentComponent } from './ask-for-advance-payment/ask-for-advance-payment.component';
import { HomeworkComponent } from './homework/homework.component';
import { RequestForMaintenanceComponent } from './request-for-maintenance/request-for-maintenance.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { AttendanceSheetComponent } from './attendance-sheet/attendance-sheet.component';
import { TeacherComponent} from './Teacher/teacher/teacher.component';

const routes: Routes = [
{ path: 'AccountLogin', component: AccountLoginComponent },
{  path: 'teacher', component: TeacherComponent },
{  path: 'home', component: HomeComponent },
{  path: 'news', component: NewsComponent },
{  path: 'contact', component: ContactComponent },
{  path: 'about', component: AboutComponent },
{  path: 'salarysheet', component: SalarySheetComponent },
{  path: 'laveApplication', component:LeaveApplicationComponent},
{  path: 'advancePayment', component: AskForAdvancePaymentComponent },
{  path: 'homework', component:  HomeworkComponent },
{  path: 'maintananceRequest', component:  RequestForMaintenanceComponent },
{  path: 'studencedetails', component: StudentDetailsComponent },
{  path: 'attendancesheet', component: AttendanceSheetComponent  },
{ path: '', redirectTo: '/home', pathMatch: 'full' },

];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {


}
