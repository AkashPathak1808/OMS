import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingPageComponent } from './landing-page/landing-page.component';

import { WebDevelopmentComponent } from './web-development/web-development.component';
import { IosDevelopmentComponent } from './ios-development/ios-development.component';


import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { DataScienceComponent } from './data-science/data-science.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { AiMlComponent } from './ai-ml/ai-ml.component';

import { CareerPageComponent } from './career-page/career-page.component';

import { UiUxComponent } from './ui-ux/ui-ux.component';

import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,

    LandingPageComponent,

    WebDevelopmentComponent,
    IosDevelopmentComponent,

    WebDevelopmentComponent,
    IosDevelopmentComponent,

    SoftwareDevelopmentComponent,
    DataScienceComponent,
    BlockchainComponent,
    AiMlComponent,

    CareerPageComponent,

    UiUxComponent,
    AboutUsComponent,

    UiUxComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
