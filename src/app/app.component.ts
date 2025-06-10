import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'employeemanagerClient';
  public employees: Employee[]=[];
  constructor(private employeeservice: EmployeeService) { }

  ngOnInit() {
      this.getEmloyees();
  }
  public getEmloyees(): void{
    this.employeeservice.getAllEmployees().subscribe(
      (response: Employee[])=>{
        this.employees = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }


  public onOpenModal(employee:Employee|null, mode: String): void{

    const container = document.getElementById('main-container')
    const button = document.createElement('button');
    button.type= 'button';
    button.style.display= 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode==='add'){
          button.setAttribute('data-target', '#addEmployeeModal');

    }
     if (mode==='edit'){
          button.setAttribute('data-target', '#updateEmployeeModal');

    }
     if (mode==='delete'){
          button.setAttribute('data-target', '#deleteEmployeeModal');

    }
    container?.appendChild(button);
    button.click();
    
  }
}
