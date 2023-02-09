import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  @Input() message: string = '';
  @Input() object: any = {
    name: '',
    price: '',
  };

  sendingParentmessage: string = ' hey i am from child';
  @Output() childEvent: EventEmitter<string> = new EventEmitter();

  sendDatatoParent() {
    this.childEvent.emit(this.sendingParentmessage);
  }

  ngOnInit(): void {}
}
