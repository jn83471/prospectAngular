import { Component, OnInit } from '@angular/core';
import { prospectInterface } from '../../interface/prospectsInterface';
import { UrlPeticionsService } from '../../url-peticions.service';

@Component({
  selector: 'app-prospects',
  templateUrl: './prospects.component.html',
  styleUrls: ['./prospects.component.css']
})
export class ProspectsComponent implements OnInit {

  constructor(private service:UrlPeticionsService) { }

  ngOnInit(): void {
    this.service.getProspects();
  }
  get(val:string=""):prospectInterface[]{
    return this.service.data;

  }
  change(val:string=""){
    this.service.getProspects(val);
  }

}
