import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllEmployees(): Observable <Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
  }

  public addEmployee(employee: Employee): Observable <Employee>{
    return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`,employee);
  }
  
  public updateEmployee(employee: Employee): Observable <Employee>{
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`,employee);
  }
  
  public deleteEmployee(employeeId: Employee): Observable <Employee>{
    return this.http.delete<Employee>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
  }
}
