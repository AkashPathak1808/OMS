import { Component, OnInit } from '@angular/core';
import { ContactformService } from '../services/contactform.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  constructor(private contactService: ContactformService, private snack: MatSnackBar) { }

  ngOnInit(): void { }

  imagepath1 = "assets/contact-us-images/contact-us-firstgif.gif";
  imagepath2 = "assets/contact-us-images/contact-us-call-logo.svg";
  imagepath3 = "assets/contact-us-images/contact-us-messenger-logo.svg";
  treeImg2 = "assets/contact-us-images/contact-us-treeimage.svg";

  public saveContact = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  formSubmit() {
    this.contactService.savedContact(this.saveContact).subscribe(
      (data) => {
        this.snack.open("Submitted Successfully !!", '', {
          duration: 3000, verticalPosition: 'top'
        });
      }, (error) => {
        this.snack.open("Something Went Wrong !!", '', {
          duration: 3000, verticalPosition: 'top'
        });
      }
    )
  }
}











