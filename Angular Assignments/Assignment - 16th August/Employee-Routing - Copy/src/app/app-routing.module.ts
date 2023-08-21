import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './Employee/employee-detail/employee-detail.component';
import { DeptComponent } from './dept/dept.component';

const routes: Routes = [{
  path: 'employee',
  children: [
      {
          path: '', component: EmployeeListComponent
      },
      {
          path: ':id/details', component: EmployeeDetailComponent
      }
  ]
},
{
  path: 'department',
  children: [
      {
          path: '', component: DeptComponent
      }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
