import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IosDevelopmentComponent } from './ios-development/ios-development.component';
import { AppDevelopmentComponent } from './app-development/app-development.component';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { UiUxComponent } from './ui-ux/ui-ux.component';
import { DataScienceComponent } from './data-science/data-science.component';
import { AiMlComponent } from './ai-ml/ai-ml.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CareerPageComponent } from './career-page/career-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { JobDeskComponent } from './job-desk/job-desk.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [

  {path: "", component:LandingPageComponent },
  {path: "home", component:LandingPageComponent },
  {path: "careers", component: CareerPageComponent},
  {path: "about-us", component: AboutUsComponent},
  {path: "job-desk", component: JobDeskComponent},
  {path: "contact-us", component: ContactUsComponent},
  {path: "singnup" ,component: SignupPageComponent},
 


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
