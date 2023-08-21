import { Component, EventEmitter, Output } from '@angular/core';
interface IDeptList
{
  id:number;
  deptName:string;
  count:number;
}
@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.sass']
})
export class DeptListComponent {
  public depts:Array<IDeptList>=[
    {
      id:1,
      deptName:"IT",
      count:40
    },
    {
      id:2,
      deptName:"HR",
      count:40
    },
    {
      id:3,
      deptName:"Sales",
      count:40
    }
  ]
  @Output() eventChange=new EventEmitter<IDeptList>();
  onClick(event:IDeptList)
  {
    this.eventChange.emit(event);
  }
}
