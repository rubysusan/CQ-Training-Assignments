import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IEmployeeDetail } from '../IEmployeeDetail';
import { EmployeeHttpService } from '../employee-http.service';

@Component({
  selector: 'app-emp-update-form',
  templateUrl: './emp-update-form.component.html',
  styleUrls: ['./emp-update-form.component.sass']
})
export class EmpUpdateFormComponent {
  public emp: Array<IEmployeeDetail> = []
  public newEmp:IEmployeeDetail={
    id:0,
    firstName : "",
    lastName : "",
    dateOfBirth : "",
    age : 0,
    dateOfJoining : "",
    country : ""
  }
  constructor(private empService: EmployeeHttpService, private router: Router,
    private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {

  }
  empFG=new FormGroup({
    id:new FormControl(''),
    firstname: new FormControl(''),
    lastname : new FormControl(''),
    dateofbirth: new FormControl(''),
    age: new FormControl(''),
    joiningdate: new FormControl(''),
    country: new FormControl('')}
  );
  onSubmit()
  {
    const val=this.empFG.value;
    const tempEmp:IEmployeeDetail={
      id:Number(val.id),
      firstName:val.firstname||'',
      lastName:val.lastname||'',
      dateOfBirth:val.dateofbirth||'',
      age:Number(val.age)||0,
      dateOfJoining:val.joiningdate||'',
      country:val.country||''

    } 
    const id: number =Number(this.activatedRoute.snapshot.params['id']) ;
    this.newEmp.firstName=tempEmp.firstName;
    this.newEmp.lastName=tempEmp.lastName;
    this.newEmp.dateOfBirth=tempEmp.dateOfBirth;
    this.newEmp.age=tempEmp.age;
    this.newEmp.dateOfJoining=tempEmp.dateOfJoining;
    this.newEmp.country=tempEmp.country;
    this.empService.updateEmployee(this.newEmp,id).subscribe(data=>{console.log(data)})
    alert('Data Updated')
  }
  onViewClick() {
    this.router.navigate(['./employee/list'])
  }
  change()
  {
    this.router.navigate(['./employee']);
  }
}
