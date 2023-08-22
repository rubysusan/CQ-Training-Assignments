import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IEmployeeDetail } from '../IEmployeeDetail';
import { EmployeeHttpService } from '../employee-http.service';

@Component({
  selector: 'app-emp-update',
  templateUrl: './emp-update.component.html',
  styleUrls: ['./emp-update.component.sass']
})
export class EmpUpdateComponent {
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
  onUpdate(value:IEmployeeDetail)
  {
    this.router.navigate([`./employee/${value.id}/update`]);
    
  }
  onViewClick() {
    this.router.navigate(['./employee/list'])
  }
  change()
  {
    this.router.navigate(['./employee']);
  }
}
