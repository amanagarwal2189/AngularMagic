import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp1/comp2.component';
import { DbcomComponent } from './dbcom/dbcom.component';
import { CustPropBindComponent } from './dbcom/cust-prop-bind.component';
import { EventbinderComponent } from './eventbinder/eventbinder.component';
import { CustEventComponent } from './eventbinder/cust-event.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    DbcomComponent,
    CustPropBindComponent,
    EventbinderComponent,
    CustEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
