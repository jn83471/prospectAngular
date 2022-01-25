import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { prospectInterface } from '../../interface/prospectsInterface';
import { UrlPeticionsService } from '../../url-peticions.service';

@Component({
  selector: 'app-showpostulantes',
  templateUrl: './showpostulantes.component.html',
  styleUrls: ['./showpostulantes.component.css']
})
export class ShowpostulantesComponent implements OnInit {
  id:string='';
  razor:string='';
  constructor(private route:ActivatedRoute,private service:UrlPeticionsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id=params["id"];
      console.log(this.id);
      this.service.showProspects(this.id);
    })
  }
  get():prospectInterface{
    return this.service.data[0];

  }
  send(option:string){
    const data = {
      "op":option,
      "razor":this.razor
    }
    console.log(JSON.stringify(data));
    this.service.postProspects(this.id,data);
  }
}
