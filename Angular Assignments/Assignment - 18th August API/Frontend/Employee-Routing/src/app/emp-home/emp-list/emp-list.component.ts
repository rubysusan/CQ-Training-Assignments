import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IEmployeeDetail } from 'src/app/emp-home/IEmployeeDetail';
import { EmpService } from 'src/app/emp-home/emp.service';
import { EmployeeHttpService } from '../employee-http.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.sass']
})
export class EmpListComponent {
  public emp: Array<IEmployeeDetail> = [];
  constructor(private empService: EmployeeHttpService, private router: Router,
    private activatedRoute: ActivatedRoute) {
   
  }

  ngOnInit()
  {
    this.empService.getEmployee().subscribe((data:Array<IEmployeeDetail>)=>{this.emp=data;})
    console.log(this.emp)
  }

 
  
  onClick(value : IEmployeeDetail): void
  {
    this.router.navigate([`./employee/${value.id}/details`]
        );
       
  }
}
