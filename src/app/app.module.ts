import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebDevelopmentComponent } from './OMS/web-development/web-development.component';
import { IosDevelopmentComponent } from './OMS/ios-development/ios-development.component';
import { SoftwareDevelopmentComponent } from './OMS/software-development/software-development.component';
import { DataScienceComponent } from './OMS/data-science/data-science.component';
import { BlockchainComponent } from './OMS/blockchain/blockchain.component';
import { AiMlComponent } from './OMS/ai-ml/ai-ml.component';
import { CareerPageComponent } from './OMS/career-page/career-page.component';
import { UiUxComponent } from './OMS/ui-ux/ui-ux.component';
import { AboutUsComponent } from './OMS/about-us/about-us.component';
import { FooterComponent } from './OMS/footer/footer.component';
import { JobDeskComponent } from './OMS/job-desk/job-desk.component';
import { AppDevelopmentComponent } from './OMS/app-development/app-development.component';
import { ContactUsComponent } from './OMS/contact-us/contact-us.component';
import { SignupPageComponent } from './OMS/signup-page/signup-page.component';
import { LandingPageComponent } from './OMS/landing-page/landing-page.component';
import { NavbarComponent } from './OMS/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EventsComponent } from './OMS/events/events.component';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

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
    EventsComponent
   ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
