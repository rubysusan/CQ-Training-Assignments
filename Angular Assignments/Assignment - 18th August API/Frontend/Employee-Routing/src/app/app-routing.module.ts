import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeptComponent } from './dept/dept.component';
import { EmpListComponent } from './emp-home/emp-list/emp-list.component';
import { EmpDetailComponent } from './emp-home/emp-detail/emp-detail.component';
import { EmpSearchComponent } from './emp-home/emp-search/emp-search.component';
import { EmpAddComponent } from './emp-home/emp-add/emp-add.component';
import { EmpHomeComponent } from './emp-home/emp-home.component';
import { EmpDeleteComponent } from './emp-home/emp-delete/emp-delete.component';
import { EmpUpdateComponent } from './emp-home/emp-update/emp-update.component';
import { EmpUpdateFormComponent } from './emp-home/emp-update-form/emp-update-form.component';

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
    },
    {
      path: 'delete', component: EmpDeleteComponent
  },
  {
    path: 'update', component: EmpUpdateComponent
},

      {
          path: ':id/update', component: EmpUpdateFormComponent
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
