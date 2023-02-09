import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  constructor() {}
  messageTOdisplay: string = '';
  objectToChild: any = {
    name: 'nanna',
    price: 90,
  };

  messageFromChild: string | null = null;

  dataFromChild(e: any) {
    this.messageFromChild = e;
  }

  ngOnInit(): void {}

  sendingdata() {
    this.messageTOdisplay = 'hey guys how Are you oll from parent';
  }

  sendClick() {}
}
