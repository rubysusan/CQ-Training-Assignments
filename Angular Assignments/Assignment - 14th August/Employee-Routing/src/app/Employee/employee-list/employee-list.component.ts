import { Component, EventEmitter, Output } from '@angular/core';
import { IEmployeeDetail } from '../IEmployeeDetail';
import { EmpService } from '../emp.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass']
})
export class EmployeeListComponent {
  public emp: Array<IEmployeeDetail> = []

  constructor(private empService: EmpService, private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.emp = empService.employees;
  }

  onClick(value : IEmployeeDetail)
  {
    this.router.navigate([`./${value.id}/details`], {relativeTo: this.activatedRoute }
        );
  }
}
