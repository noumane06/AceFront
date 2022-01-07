import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  url = 'https://azureapinoumane.azurewebsites.net/api/Patient/';
  constructor(private http: HttpClient) { }
  getPatients() {
    return this.http.get(this.url);
  }
  getPatient(id: string) {
    return this.http.get(this.url + id);
  }
  setPatient(p: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.url, p, httpOptions);
  }
}
