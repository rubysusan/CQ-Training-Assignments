import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IEmployeeDetail } from '../IEmployeeDetail';
import { EmployeeHttpService } from '../employee-http.service';

@Component({
  selector: 'app-emp-delete',
  templateUrl: './emp-delete.component.html',
  styleUrls: ['./emp-delete.component.sass']
})
export class EmpDeleteComponent {
  public emp: Array<IEmployeeDetail> = [];
  constructor(private empService: EmployeeHttpService, private router: Router,
    private activatedRoute: ActivatedRoute) {
   
  }

  ngOnInit()
  {
    this.empService.getEmployee().subscribe((data:Array<IEmployeeDetail>)=>{this.emp=data;})
    console.log(this.emp)
  }
getData()
{
  this.empService.getEmployee().subscribe((data:Array<IEmployeeDetail>)=>{this.emp=data;})
}
 
  
  onClick(value : IEmployeeDetail): void
  {
    this.router.navigate([`./employee/${value.id}/details`]
        );
       
  }
  onDelete(value:number)
  {
    this.empService.deleteEmployee(value).subscribe(data=>{this.getData()})
    alert('Data Deleted')
  }
  onViewClick() {
    this.router.navigate(['./employee/list'])
  }
  change()
  {
    this.router.navigate(['./employee']);
  }
}
