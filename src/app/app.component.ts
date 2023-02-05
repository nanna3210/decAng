import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'decAng';
  nanna = 'hey NNAnannan';
  // function to get cricket score?

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    console.log(this.document);
  }
}
