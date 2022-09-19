import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  userName = 'Himanshu';
  isChildDestroyed = false;

  constructor() {
    console.log('Parent Component constructor');
  }

  ngOnInit() {
    console.log('ngOnInit from the parent component');
  }

  updateUser() {
    this.userName = 'NewName';
  }

  destroy() {
    this.isChildDestroyed = true;
  }
}
