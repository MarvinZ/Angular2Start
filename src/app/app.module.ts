import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertModule } from 'ng2-bootstrap';

import {ToastModule} from 'ng2-toastr/ng2-toastr';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AlertModule.forRoot(), 
    ToastModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
