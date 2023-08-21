import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface IDeptList
{
  id:number;
  deptName:string;
  count:number;
}
@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.sass']
})
export class DeptComponent {
  toShow=true;
  event!: IDeptList;
  onChange(event:IDeptList)
  {
    this.event=event;
    this.toShow=!this.toShow;
  }
  hideEvent()
  {
    this.toShow=!this.toShow;
  }
  
}
