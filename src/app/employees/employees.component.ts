import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  public employees = [
    { id: 1, name: 'Rajiv' },
    { id: 2, name: 'Phalana' },
  ];
  public currentUser: any;

  constructor() {}

  ngOnInit(): void {}

  updateMainState($event: any) {
    this.currentUser = $event;
    console.log(this.currentUser);
  }
}
