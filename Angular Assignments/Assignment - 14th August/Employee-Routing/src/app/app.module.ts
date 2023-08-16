import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './Employee/employee-detail/employee-detail.component';
import { DeptListComponent } from './dept/dept-list/dept-list.component';
import { DeptDetailComponent } from './dept/dept-detail/dept-detail.component';
import { HomeComponent } from './home/home.component';
import { EmployeeModule } from './Employee/employee.module';
import { DeptComponent } from './dept/dept.component';

@NgModule({
  declarations: [
    AppComponent,
    DeptListComponent,
    DeptDetailComponent,
    HomeComponent,
    DeptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
