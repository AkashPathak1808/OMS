import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingPageComponent } from './landing-page/landing-page.component';

import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { DataScienceComponent } from './data-science/data-science.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { AiMlComponent } from './ai-ml/ai-ml.component';
import { CareerPageComponent } from './career-page/career-page.component';

@NgModule({
  declarations: [
    AppComponent,

    LandingPageComponent,

    SoftwareDevelopmentComponent,
    DataScienceComponent,
    BlockchainComponent,
    AiMlComponent,
    CareerPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
