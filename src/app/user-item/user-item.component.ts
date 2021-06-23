import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent implements OnInit {
  @Input() public user: any;
  @Input() public currentUser: any;

  @Output() public selectedUser = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selectChild(item: any) {
    this.selectedUser.emit(item);
  }
}
