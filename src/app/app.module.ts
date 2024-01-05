import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WebDevelopmentComponent} from './web-development/web-development.component';
import { IosDevelopmentComponent } from './ios-development/ios-development.component';

@NgModule({
  declarations: [
    AppComponent,
    WebDevelopmentComponent,
    IosDevelopmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
