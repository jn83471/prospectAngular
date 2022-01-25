import { Component, OnInit } from '@angular/core';
import { HasPuesto } from '../../interface/prospectsInterface';
import { UrlPeticionsService } from '../../url-peticions.service';

@Component({
  selector: 'app-puestos',
  templateUrl: './puestos.component.html',
  styleUrls: ['./puestos.component.css']
})
export class PuestosComponent implements OnInit {

  constructor(private service:UrlPeticionsService) { }

  ngOnInit(): void {
    this.service.getPuestos();
  }
  get():HasPuesto[]{
    return this.service.data_puesto;
  }
  send(id:string){
    this.service.deletePuesto(id);
    this.service.getPuestos();
  }
}
