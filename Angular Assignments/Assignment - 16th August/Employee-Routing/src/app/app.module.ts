import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeptListComponent } from './dept/dept-list/dept-list.component';
import { DeptDetailComponent } from './dept/dept-detail/dept-detail.component';
import { HomeComponent } from './home/home.component';
import { EmployeeModule } from './emp-home/employee.module';
import { DeptComponent } from './dept/dept.component';
import { EmpHomeComponent } from './emp-home/emp-home.component';
import { EmpAddComponent } from './emp-home/emp-add/emp-add.component';
import { EmpSearchComponent } from './emp-home/emp-search/emp-search.component';
import { EmpListComponent } from './emp-home/emp-list/emp-list.component';
import { EmpDetailComponent } from './emp-home/emp-detail/emp-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DeptListComponent,
    DeptDetailComponent,
    HomeComponent,
    DeptComponent,
    EmpHomeComponent,
    EmpAddComponent,
    EmpSearchComponent,
    EmpListComponent,
    EmpDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,ReactiveFormsModule ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
