import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IEmployeeDetail } from 'src/app/emp-home/IEmployeeDetail';
import { EmpService } from 'src/app/emp-home/emp.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.sass']
})
export class EmpAddComponent {
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
  change()
  {
    this.router.navigate(['./employee']);
  }
}
