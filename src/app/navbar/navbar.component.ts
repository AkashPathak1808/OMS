import { Component } from '@angular/core';
import { faUser
 } from '@fortawesome/free-regular-svg-icons';

import { faContactCard } from '@fortawesome/free-regular-svg-icons';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user = faUser;
  email = faContactCard;
  

  railworld = 'assets/navbarImg/railworld.svg';

  icon = 'assets/navbarImg/icon.svg';
}
  