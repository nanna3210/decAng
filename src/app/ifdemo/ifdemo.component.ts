import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  templateUrl: './ifdemo.component.html',
  styleUrls: ['./ifdemo.component.scss'],
})
export class IfdemoComponent implements OnInit {
  users: any = {};
  constructor() {}

  ngOnInit(): void {
    fetch('https://randomuser.me/api/')
      // .then((response) => response.json)
      .then((data) => console.log(data))
      .then((data) => (this.users = data));
  }
}
