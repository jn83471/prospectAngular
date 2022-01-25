import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HasPuesto } from '../../interface/prospectsInterface';
import { UrlPeticionsService } from '../../url-peticions.service';

@Component({
  selector: 'app-show-prospects',
  templateUrl: './show-prospects.component.html',
  styleUrls: ['./show-prospects.component.css']
})
export class ShowProspectsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:UrlPeticionsService) { }
  id:string='';
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id=params["id"];
      console.log(this.id);
      this.service.showPuestos(this.id);
    })
  }

  get():HasPuesto{
    return this.service.data_puesto[0];
  }
  send(){
    this.service.deletePuesto(this.id);
    this.service.showPuestos(this.id);
  }
}
