import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  logo = "assets/footer/image 2.png";
  currentYear: number = new Date().getFullYear(); // Add this line
}
