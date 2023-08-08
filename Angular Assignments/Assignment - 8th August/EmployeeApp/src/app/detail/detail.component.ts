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
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent {
  public employees:Array<IEmployeeDetail>=[
    {
      firstname:"Ruby",
      lastname:"Abraham",
      dateofbirth:new Date("2001-07-13") ,
      age:22,
      joiningdate:new Date("2023-07-01"),
      country:"India",
    },
    {
      firstname:"Reenu",
      lastname:"Abraham",
      dateofbirth:new Date("2001-12-12") ,
      age:21,
      joiningdate:new Date("2023-07-01"),
      country:"India",
    },
    {
      firstname:"Reshma",
      lastname:"Johnson",
      dateofbirth:new Date("2001-01-01") ,
      age:22,
      joiningdate:new Date("2023-07-01"),
      country:"India",
    },
    {
      firstname:"Arun",
      lastname:"Sabu",
      dateofbirth:new Date("2001-11-21") ,
      age:21,
      joiningdate:new Date("2023-07-01"),
      country:"India",
    },
    {
      firstname:"Varghese",
      lastname:"Abraham",
      dateofbirth:new Date("2000-07-07") ,
      age:23,
      joiningdate:new Date("2023-07-01"),
      country:"India",
    }
  ];

}
