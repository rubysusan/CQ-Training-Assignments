import { Component } from '@angular/core';
interface IEmployeeDetail{
  firstname: string;
  lastname: string;
  dateofbirth:Date ;
  age:number;
  joiningdate:Date;
  country:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Employee-Module';
  toShow=true;
  event!: IEmployeeDetail;
  onChange(event:IEmployeeDetail)
  {
    this.event=event;
    this.toShow=!this.toShow;
  }
  hideEvent()
  {
    this.toShow=!this.toShow;
  }
  
}
