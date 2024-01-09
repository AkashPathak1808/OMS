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
import { FooterComponent } from './footer/footer.component';
import { JobDeskComponent } from './job-desk/job-desk.component';

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
<<<<<<< HEAD

    CareerPageComponent,

    UiUxComponent,
    AboutUsComponent,

    UiUxComponent,
=======
    UiUxComponent,
    FooterComponent,
    JobDeskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> 3237eef87b93c8d7a6556d282ee011ed232f7439
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
