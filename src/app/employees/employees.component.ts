import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  public employees: any;
  public currentUser: any;

  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this._http
      .api('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        this.employees = data;
        console.log(this.employees);
      });
  }

  updateMainState($event: any) {
    this.currentUser = $event;
    console.log(this.currentUser);
  }
}
