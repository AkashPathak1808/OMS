import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ResumeserviceService {

  constructor(private http:HttpClient) { }

  // save resume form
  public savedResume(resume: any) {
    return this.http.post(`${baseUrl}/resumeform/`, resume);
  }
}
