import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IEmployeeDetail } from 'src/app/emp-home/IEmployeeDetail';
import { EmpService } from 'src/app/emp-home/emp.service';
import { EmployeeHttpService } from '../employee-http.service';

@Component({
  selector: 'app-emp-search',
  templateUrl: './emp-search.component.html',
  styleUrls: ['./emp-search.component.sass']
})
export class EmpSearchComponent implements OnInit {
  public name='';
  public emp: Array<IEmployeeDetail> = []
  constructor(private empService: EmployeeHttpService, private router: Router,
    private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
      this.empService.getEmployee().subscribe((data:Array<IEmployeeDetail>)=>{this.emp=data;})
  }
  searchForm=new FormGroup({searchVal:new FormControl('')});
  public val:string=';'
  public data:Array<IEmployeeDetail>=[];
    ngOnInit():void {
      this.searchForm.controls['searchVal'].valueChanges.subscribe(value => {
        console.log(value);
        this.val=value!;
        this.data=this.emp.filter(x=>x.firstName.toLocaleLowerCase().includes(this.val.toLocaleLowerCase()));
    });
  }
  onClick(value : IEmployeeDetail): void
  {
    this.router.navigate([`./employee/${value.id}/details`]
        );
       
  }
    
    onSearch()
    {
      this.data=this.emp.filter(x=>x.firstName.toLocaleLowerCase().includes(this.val.toLocaleLowerCase()));
      console.log(this.data);
    }
    change()
  {
    this.router.navigate(['./employee']);
  }
}
