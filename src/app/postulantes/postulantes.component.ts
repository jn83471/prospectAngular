import { Component, OnInit } from '@angular/core';
import { prospectInterface } from '../admin/interface/prospectsInterface';
import { UrlPeticionsService } from '../admin/url-peticions.service';

@Component({
  selector: 'app-postulantes',
  templateUrl: './postulantes.component.html',
  styleUrls: ['./postulantes.component.css']
})
export class PostulantesComponent implements OnInit {

  constructor(private service:UrlPeticionsService) { }

  ngOnInit(): void {
    this.service.getProspects();
  }

  get():prospectInterface[]{
    return this.service.data;
  }

  change(search:string=""){
    this.service.getProspects(search)
  }

}
