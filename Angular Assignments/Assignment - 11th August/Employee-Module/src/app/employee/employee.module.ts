import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    EmployeeListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EmployeeListComponent,
    DetailComponent
  ]
})
export class EmployeeModule { }
