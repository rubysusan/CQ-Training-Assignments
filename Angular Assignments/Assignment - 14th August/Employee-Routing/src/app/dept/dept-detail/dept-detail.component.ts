import { Component, EventEmitter, Input, Output } from '@angular/core';
interface IDeptList
{
  id:number;
  deptName:string;
  count:number;
}
@Component({
  selector: 'app-dept-detail',
  templateUrl: './dept-detail.component.html',
  styleUrls: ['./dept-detail.component.sass']
})
export class DeptDetailComponent {
  @Input() event?:IDeptList

  @Output() hideComp=new EventEmitter<Event>();
  hide()
  {
    this.hideComp.emit();
  }
}
