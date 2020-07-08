import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { EmployeesListEnterLeaveComponent } from './employees-list-enter-leave/employees-list-enter-leave.component';
import { InsertRemoveComponent } from './insert-remove/insert-remove.component';
import { EmployeeListPageComponent } from './employee-list-page/employee-list-page.component';
import { StatusSliderComponent } from './status-slider/status-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    EmployeesListEnterLeaveComponent,
    InsertRemoveComponent,
    EmployeeListPageComponent,
    StatusSliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
