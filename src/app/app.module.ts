import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TeacherComponent } from './Teacher/teacher/teacher.component';
import { FormsModule } from '@angular/forms';
import { TeacherDetailComponent } from './Teacher/teacher-detail/teacher-detail.component';
import {TeacherService} from './services/teacher.service';
import { TeacherSideBarComponent } from './teacher-side-bar/teacher-side-bar.component';
import { AccountLoginComponent } from './account-login/account-login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './nursary-forms/contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SalarySheetComponent } from './salary-sheet/salary-sheet.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { AskForAdvancePaymentComponent } from './ask-for-advance-payment/ask-for-advance-payment.component';
import { HomeworkComponent } from './homework/homework.component';
import { RequestForMaintenanceComponent } from './request-for-maintenance/request-for-maintenance.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentService } from './services/student.service';
import { AttendanceSheetComponent } from './attendance-sheet/attendance-sheet.component';
import { IgxSnackbarModule } from 'igniteui-angular/main';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    TeacherDetailComponent,
    TeacherSideBarComponent,
    AccountLoginComponent,
    HomeComponent,
    NewsComponent,
    ContactComponent,
    AboutComponent,
    SalarySheetComponent,
    LeaveApplicationComponent,
    AskForAdvancePaymentComponent,
    HomeworkComponent,
    RequestForMaintenanceComponent,
    StudentDetailsComponent,
    AttendanceSheetComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    IgxSnackbarModule,

  ],
  providers: [TeacherService, StudentService],
  bootstrap: [AppComponent],
  exports: [BrowserModule],


})
export class AppModule { }
