import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResumeserviceService } from '../services/resumeservice.service';

@Component({
  selector: 'app-job-desk',
  templateUrl: './job-desk.component.html',
  styleUrls: ['./job-desk.component.css']
})
export class JobDeskComponent {

  @ViewChild('jobApplicationModal') jobApplicationModal: any;

  constructor(private resumeService: ResumeserviceService, private snack: MatSnackBar) { }

  // constructor(private snack: MatSnackBar){}

  ngOnInit(): void { }

  public resumeForm = {
    name: '',
    phone: '',
    email: '',
    resumeFileName: '',
  }

  formSubmit() {
    if (this.resumeForm.name != '' && this.resumeForm.email != '' && this.resumeForm.phone != '' && this.resumeForm.email != '' && this.resumeForm.resumeFileName != '') {
      //backend saving code

      this.resumeService.savedResume(this.resumeForm).
        subscribe(
          (data) => {
            this.snack.open("Submitted Successfully !!", '', {
              duration: 5000, verticalPosition: 'top'
            });
            this.resetForm();
            this.closeModal();
          }, (error) => {
            this.snack.open("Something Went Wrong !!", '', {
              duration: 5000, verticalPosition: 'top'
            });
            this.closeModal();
          }
        );
    }
    else {
      this.snack.open("Fill form correctly !!", '', {
        duration: 5000, verticalPosition: 'top'
      });
      this.closeModal();
    }
  }


  closeModal() {
    if (this.jobApplicationModal) {
      this.jobApplicationModal.nativeElement.click(); // Programmatically close the modal
    }
  }

  private resetForm() {
    // Reset the form by creating a new object
    this.resumeForm = {
      name: '',
      phone: '',
      email: '',
      resumeFileName: '',
    };
  }

  resetFormOnFocusOut() {
    // Reset the form when any input field loses focus
    this.resetForm();
  }


}
