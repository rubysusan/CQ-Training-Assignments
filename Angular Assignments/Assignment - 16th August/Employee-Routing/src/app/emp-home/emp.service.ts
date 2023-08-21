import { Injectable } from '@angular/core';
import { IEmployeeDetail } from './IEmployeeDetail';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  public employees:Array<IEmployeeDetail>=[
    {
      id:1,
      firstname:"Ruby",
      lastname:"Abraham",
      dateofbirth:new Date("2001-07-13") ,
      age:22,
      joiningdate:new Date("2023-07-01"),
      country:"India",
    },
    {
      id:2,
      firstname:"Reenu",
      lastname:"Abraham",
      dateofbirth:new Date("2001-12-12") ,
      age:21,
      joiningdate:new Date("2023-07-01"),
      country:"India",
    },
    {
      id:3,
      firstname:"Reshma",
      lastname:"Johnson",
      dateofbirth:new Date("2001-01-01") ,
      age:22,
      joiningdate:new Date("2023-07-01"),
      country:"India",
    },
    {
      id:4,
      firstname:"Arun",
      lastname:"Sabu",
      dateofbirth:new Date("2001-11-21") ,
      age:21,
      joiningdate:new Date("2023-07-01"),
      country:"India",
    },
    {
      id:5,
      firstname:"Varghese",
      lastname:"Abraham",
      dateofbirth:new Date("2000-07-07") ,
      age:23,
      joiningdate:new Date("2023-07-01"),
      country:"India",
    }
  ];

  constructor() { }
}
