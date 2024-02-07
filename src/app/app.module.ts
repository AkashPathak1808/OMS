import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { IosDevelopmentComponent } from './ios-development/ios-development.component';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { DataScienceComponent } from './data-science/data-science.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { AiMlComponent } from './ai-ml/ai-ml.component';
import { CareerPageComponent } from './career-page/career-page.component';
import { UiUxComponent } from './ui-ux/ui-ux.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { JobDeskComponent } from './job-desk/job-desk.component';
import { AppDevelopmentComponent } from './app-development/app-development.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    WebDevelopmentComponent,
    IosDevelopmentComponent,
    SoftwareDevelopmentComponent,
    DataScienceComponent,
    BlockchainComponent,
    AiMlComponent,
    CareerPageComponent,
    AboutUsComponent,
    FooterComponent,
    JobDeskComponent,
    UiUxComponent,
    AppDevelopmentComponent,
    ContactUsComponent,
    SignupPageComponent,
    NavbarComponent,
    ResetpasswordComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatToolbarModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
