
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NgbdModalComponent } from './modal-component';
import { MyModalContent } from './modal-content'

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, NgbModule.forRoot()], 
  declarations: [AppComponent, NgbdModalComponent, MyModalContent],
  entryComponents: [MyModalContent],
  bootstrap: [AppComponent]
}) 
export class AppModule {}
