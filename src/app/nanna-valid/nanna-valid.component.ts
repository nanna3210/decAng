import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName } from '@angular/forms';
@Component({
  selector: 'app-nanna-valid',
  templateUrl: './nanna-valid.component.html',
  styleUrls: ['./nanna-valid.component.scss'],
})
export class NannaValidComponent implements OnInit {
  constructor() {}
  frmRegister = new FormGroup({
    Name: new FormControl(''),
    price: new FormControl(0),
    frmStock: new FormGroup({
      status: new FormControl(false),
      city: new FormControl(''),
    }),
    // shippedTo: new FormControl(''),
  });

  formSubmit(e: any) {
    alert(JSON.stringify(e));
  }

  ngOnInit(): void {}
  // formcontrol
  // frmgroup
}
