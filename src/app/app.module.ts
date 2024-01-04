import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { DataScienceComponent } from './data-science/data-science.component';

@NgModule({
  declarations: [
    AppComponent,
    SoftwareDevelopmentComponent,
    DataScienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
