import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import {WebDevelopmentComponent} from './web-development/web-development.component';
import { IosDevelopmentComponent } from './ios-development/ios-development.component';
=======
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { DataScienceComponent } from './data-science/data-science.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { AiMlComponent } from './ai-ml/ai-ml.component';
import { UiUxComponent } from './ui-ux/ui-ux.component';
>>>>>>> 797f3a8632456a454f773cc5296864ddf88a43f6

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    WebDevelopmentComponent,
    IosDevelopmentComponent
=======
    SoftwareDevelopmentComponent,
    DataScienceComponent,
    BlockchainComponent,
    AiMlComponent,
    UiUxComponent
>>>>>>> 797f3a8632456a454f773cc5296864ddf88a43f6
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
