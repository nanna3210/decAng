import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfdemoComponent } from './ifdemo/ifdemo.component';
import { ForDemoComponent } from './for-demo/for-demo.component';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent, IfdemoComponent, ForDemoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
