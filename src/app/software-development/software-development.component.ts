import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-software-development',
  templateUrl: './software-development.component.html',
  styleUrls: ['./software-development.component.css']
})
export class SoftwareDevelopmentComponent {
  img1 = "assets/Software_Development/sdImg1.gif";
  img3 = "assets/Software_Development/sd3.svg";
  line = "assets/Software_Development/line.svg";
  box = "assets/Software_Development/box.svg";

  constructor(private router: Router) { }

  redirectToIos() {
    this.router.navigate(['/service/ios'])
  }

  redirectToAndroid() {
    this.router.navigate(['/service/android'])
  }

  redirectToAppDevelopment() {
    this.router.navigate(['/service/app-development'])
  }

  redirectToSoftwareDevelopment() {
    this.router.navigate(['/service/ios'])
  }

  redirectToWebDevelopment() {
    this.router.navigate(['/service/ios'])
  }

}
