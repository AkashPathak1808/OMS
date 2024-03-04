import { Component, ViewChild} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResumeserviceService } from '../services/resumeservice.service';

@Component({
  selector: 'app-job-desk',
  templateUrl: './job-desk.component.html',
  styleUrls: ['./job-desk.component.css']
})
export class JobDeskComponent  {

  @ViewChild('jobApplicationModal') jobApplicationModal: any; 

  constructor(private resumeService:ResumeserviceService, private snack: MatSnackBar) { }

  // constructor(private snack: MatSnackBar){}

  ngOnInit(): void { }

  public resumeForm = {
    name: '',
    phone: '',
    email: '',
    resumeFileName: '',
  }

  formSubmit(){
    console.log(this.resumeForm);
    if( this.resumeForm.name != '' && this.resumeForm.email != '' && this.resumeForm.phone != '' )
    {
      //backend saving code

      this.snack.open("Submitted Successfully !!", '', {
        duration: 5000, verticalPosition: 'top'
      });

      this.resetForm();
      this.closeModal();
    }
    else
    {
      this.snack.open("Something Went Wrong !!", '', {
        duration: 5000, verticalPosition: 'top'
      });

      this.resetForm();
      this.closeModal();
    }
    
    // this.resumeService.savedResume(this.resumeForm).
    // subscribe(
    //   (data) => {
        
    //     console.log(data)
    //   }, (error) => {
        
    //     console.log(error)
    //   }
    // );

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
