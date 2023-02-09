import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfdemoComponent } from './ifdemo/ifdemo.component';
import { ForDemoComponent } from './for-demo/for-demo.component';
import { CommonModule } from '@angular/common';
import { ClassBindComponent } from './class-bind/class-bind.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
// import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent, IfdemoComponent, ForDemoComponent, ClassBindComponent, EventBindComponent, ShoppingCartComponent, ParentComponent, ChildComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
