import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IEmployeeDetail } from '../IEmployeeDetail';
import { EmpService } from '../emp.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass']
})
export class EmployeeListComponent implements OnInit {
  public name='';
  public emp: Array<IEmployeeDetail> = []
  public newEmp:IEmployeeDetail={
    id:0,
    firstname : "",
    lastname : "",
    dateofbirth : new Date(),
    age : 0,
    joiningdate : new Date(),
    country : ""
  }
  

  constructor(private empService: EmpService, private router: Router,
    private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
    this.emp = empService.employees;
  }
  empFG=new FormGroup({
    firstname: new FormControl(''),
    lastname : new FormControl(''),
    dateofbirth: new FormControl(''),
    age: new FormControl(''),
    joiningdate: new FormControl(''),
    country: new FormControl('')}
  );
  searchForm=new FormGroup({searchVal:new FormControl('')});

  onClick(value : IEmployeeDetail): void
  {
    this.router.navigate([`./${value.id}/details`], {relativeTo: this.activatedRoute }
        );
       
  }
 public val:string=';'
public data:Array<IEmployeeDetail>=[];
  ngOnInit():void {
    this.searchForm.controls['searchVal'].valueChanges.subscribe(value => {
      console.log(value);
      this.val=value!;
      this.data=this.emp.filter(x=>x.firstname.toLocaleLowerCase().includes(this.val.toLocaleLowerCase()));
  });
}

  onSubmit()
  {
       
    this.newEmp.id=this.emp[this.emp.length-1].id+1;
    this.newEmp.firstname=this.empFG.get("firstname")?.value!;
    this.newEmp.lastname=this.empFG.get("lastname")?.value!;
    this.newEmp.dateofbirth=new Date(this.empFG.get("dateofbirth")?.value!);
    this.newEmp.age=Number(this.empFG.get("age")?.value!);
    this.newEmp.joiningdate=new Date(this.empFG.get("joiningdate")?.value!);
    this.newEmp.country=this.empFG.get("country")?.value!;
    this.emp.push(this.newEmp);
  }
  
  onSearch()
  {
    this.data=this.emp.filter(x=>x.firstname.toLocaleLowerCase().includes(this.val.toLocaleLowerCase()));
    console.log(this.data);
  }
}
