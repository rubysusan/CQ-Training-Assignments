import { Component, EventEmitter, Input, Output } from '@angular/core';
interface IEmployeeDetail{
  firstname: string;
  lastname: string;
  dateofbirth:Date ;
  age:number;
  joiningdate:Date;
  country:string;
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent {
  @Input() event?:IEmployeeDetail

  @Output() hideComp=new EventEmitter<Event>();
  hide()
  {
    this.hideComp.emit();
  }
}
