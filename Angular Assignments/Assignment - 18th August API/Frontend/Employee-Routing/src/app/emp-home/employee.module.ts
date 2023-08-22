import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { EmpDeleteComponent } from './emp-delete/emp-delete.component';
import { EmpUpdateComponent } from './emp-update/emp-update.component';
import { EmpUpdateFormComponent } from './emp-update-form/emp-update-form.component';



@NgModule({
  declarations: [
    EmpDeleteComponent,
    EmpUpdateComponent,
    EmpUpdateFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule 
  ],
  exports: []
})
export class EmployeeModule { }
