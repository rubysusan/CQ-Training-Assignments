import { Component, OnInit } from '@angular/core';
import { IEmployeeDetail } from '../IEmployeeDetail';
import { EmpService } from '../emp.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.sass']
})
export class EmployeeDetailComponent implements OnInit {
  public detailsofEmp?: IEmployeeDetail;
  public employeeId: number = 0;
  public empList: Array<IEmployeeDetail> = [];

  constructor(private empService: EmpService, private route: ActivatedRoute,
      private router: Router) {
      this.empList = this.empService.employees;
  }
      ngOnInit(): void {
          console.log(this.route);
          const id: string = this.route.snapshot.params['id'];
          this.employeeId = Number(id);
          console.log(this.employeeId);
          this.detailsofEmp = this.empList.find((emp) => emp.id === this.employeeId)
      }
  
  change()
  {
    this.router.navigate(['./employee']);
  }
  
}

