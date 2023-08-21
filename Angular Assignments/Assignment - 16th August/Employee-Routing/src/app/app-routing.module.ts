import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeptComponent } from './dept/dept.component';
import { EmpListComponent } from './emp-home/emp-list/emp-list.component';
import { EmpDetailComponent } from './emp-home/emp-detail/emp-detail.component';
import { EmpSearchComponent } from './emp-home/emp-search/emp-search.component';
import { EmpAddComponent } from './emp-home/emp-add/emp-add.component';
import { EmpHomeComponent } from './emp-home/emp-home.component';

const routes: Routes = [{
  path: 'employee',
  children: [
      {
          path: '', component: EmpHomeComponent
      },
      {
          path: ':id/details', component: EmpDetailComponent
    }
    ,
      {
        path: 'list', component: EmpListComponent
      },
      {
        path: 'add', component: EmpAddComponent
      },
      {
        path: 'search', component: EmpSearchComponent
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
