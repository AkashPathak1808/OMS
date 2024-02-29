import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class ContactformService {

  constructor(private http:HttpClient) { }

  // save contact
  public savedContact(contact: any) {
    return this.http.post(`${baseUrl}/contactform/`, contact);
  }
}
