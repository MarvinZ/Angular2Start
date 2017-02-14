import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { AlertModule } from 'ng2-bootstrap';

import {ToastModule} from 'ng2-toastr/ng2-toastr';


import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { NavComponent } from './nav/nav.component';

import { appRoutes } from './routes'

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    NavComponent
  ],
  imports: [
    AlertModule.forRoot(), 
    ToastModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
