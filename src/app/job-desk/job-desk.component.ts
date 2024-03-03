import { Component} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResumeserviceService } from '../services/resumeservice.service';

@Component({
  selector: 'app-job-desk',
  templateUrl: './job-desk.component.html',
  styleUrls: ['./job-desk.component.css']
})
export class JobDeskComponent  {

  constructor(private resumeService:ResumeserviceService, private snack: MatSnackBar) { }

  ngOnInit(): void { }

  public resumeForm = {
    name: '',
    phone: '',
    email: '',
    resumeFileName: '',
  }
  
  formSubmit(){
    console.log(this.resumeForm)

    this.resumeService.savedResume(this.resumeForm).subscribe(
      (data) => {
        this.snack.open("Submitted Successfully !!", '', {
          duration: 5000, verticalPosition: 'top'
        });
        console.log(data)
      }, (error) => {
        this.snack.open("Something Went Wrong !!", '', {
          duration: 5000, verticalPosition: 'top'
        });
        console.log(error)
      }
    )
  }
}
