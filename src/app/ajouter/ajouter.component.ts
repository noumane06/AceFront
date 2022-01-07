import { Component, OnInit } from '@angular/core';
import {Patient} from '../models/Patient';
import { PatientService} from '../patient.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  patient: any;
  constructor(private service: PatientService) { }

  ngOnInit() {
  }
  ajouterPatient(value: any) {
    this.service.setPatient(value).subscribe();
  }

}
