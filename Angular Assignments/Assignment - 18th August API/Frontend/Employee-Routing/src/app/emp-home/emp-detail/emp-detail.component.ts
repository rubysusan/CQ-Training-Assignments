import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployeeDetail } from 'src/app/emp-home/IEmployeeDetail';
import { EmpService } from 'src/app/emp-home/emp.service';
import { EmployeeHttpService } from '../employee-http.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.sass']
})
export class EmpDetailComponent {
  public detailsofEmp?: IEmployeeDetail;
  public employeeId: number = 0;
  public empList: Array<IEmployeeDetail> = [];

  constructor(private empService: EmployeeHttpService, private route: ActivatedRoute,
      private router: Router) {
        this.empService.getEmployee().subscribe((data:Array<IEmployeeDetail>)=>{this.empList=data;
          console.log(this.route);
          const id: string = this.route.snapshot.params['id'];
          this.employeeId = Number(id);
          console.log(this.employeeId);
          this.detailsofEmp = this.empList.find((emp) => emp.id == this.employeeId)})
  }
      ngOnInit(): void {
          
      }
      onViewClick() {
        this.router.navigate(['./employee/list'])
      }
  change()
  {
    this.router.navigate(['./employee']);
  }
  


}
