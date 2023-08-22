import {
  HttpClient
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployeeDetail } from './IEmployeeDetail';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHttpService {
  private baseURL="http://localhost:5295/api/Employee/";
  constructor(private http: HttpClient) { }
  public getEmployee():Observable<Array<IEmployeeDetail>>
  {
    return this.http.get<Array<IEmployeeDetail>>(this.baseURL+"SelectAll");
  }
  public addEmployee(emp:IEmployeeDetail):Observable<boolean>
  {    
    return this.http.post<boolean>(this.baseURL+"InsertEmployee",emp)
  }
  public deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.baseURL}DeleteByID?id=${id}`)
  }
  public updateEmployee(emp:IEmployeeDetail,id:number):Observable<any>{
    return this.http.put(`${this.baseURL}UpdateByID?id=${id}`,emp)
  }
}
