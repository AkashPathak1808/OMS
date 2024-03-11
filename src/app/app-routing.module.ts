import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IosDevelopmentComponent } from './OMS/ios-development/ios-development.component';
import { AppDevelopmentComponent } from './OMS/app-development/app-development.component';
import { SoftwareDevelopmentComponent } from './OMS/software-development/software-development.component';
import { WebDevelopmentComponent } from './OMS/web-development/web-development.component';
import { UiUxComponent } from './OMS/ui-ux/ui-ux.component';
import { DataScienceComponent } from './OMS/data-science/data-science.component';
import { AiMlComponent } from './OMS/ai-ml/ai-ml.component';
import { BlockchainComponent } from './OMS/blockchain/blockchain.component';
import { LandingPageComponent } from './OMS/landing-page/landing-page.component';
import { CareerPageComponent } from './OMS/career-page/career-page.component';
import { AboutUsComponent } from './OMS/about-us/about-us.component';
import { JobDeskComponent } from './OMS/job-desk/job-desk.component';
import { ContactUsComponent } from './OMS/contact-us/contact-us.component';
import { SignupPageComponent } from './OMS/signup-page/signup-page.component';
import { EventsComponent } from './OMS/events/events.component';

const routes: Routes = [

  {path: "", component:LandingPageComponent },
  {path: "home", component:LandingPageComponent },
  {path: "careers", component: CareerPageComponent},
  {path: "about-us", component: AboutUsComponent},
  {path: "job-desk", component: JobDeskComponent},
  {path: "contact-us", component: ContactUsComponent},
  {path: "singnup" ,component: SignupPageComponent},
  {path: "events" ,component: EventsComponent},

  {path: "service/ios", component: IosDevelopmentComponent},
  {path: "service/android", component: AppDevelopmentComponent},
  {path: "service/app-development", component: AppDevelopmentComponent},
  {path: "service/software-development", component: SoftwareDevelopmentComponent},
  {path: "service/web-development", component: WebDevelopmentComponent},
  {path: "service/ui-ux-designing", component: UiUxComponent},
  {path: "service/data-science", component: DataScienceComponent},
  {path: "service/ai-ml-development", component: AiMlComponent},
  {path: "service/blockchain", component: BlockchainComponent},

  {path: '**', redirectTo: 'home'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
