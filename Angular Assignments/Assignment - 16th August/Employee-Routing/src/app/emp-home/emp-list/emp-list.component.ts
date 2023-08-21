import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IEmployeeDetail } from 'src/app/emp-home/IEmployeeDetail';
import { EmpService } from 'src/app/emp-home/emp.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.sass']
})
export class EmpListComponent {
  public emp: Array<IEmployeeDetail> = [];
  constructor(private empService: EmpService, private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.emp = empService.employees;
  }
  
  onClick(value : IEmployeeDetail): void
  {
    this.router.navigate([`./employee/${value.id}/details`]
        );
       
  }
}
