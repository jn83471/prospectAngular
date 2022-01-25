import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UrlPeticionsService } from '../../url-peticions.service';

@Component({
  selector: 'app-create-puesto',
  templateUrl: './create-puesto.component.html',
  styleUrls: ['./create-puesto.component.css']
})
export class CreatePuestoComponent implements OnInit {
  form!:FormGroup;
  message:string='';
  constructor(private formb:FormBuilder,private service:UrlPeticionsService,private route:Router) { }

  ngOnInit(): void {
    this.form=this.formb.group({
      'nombre':['',Validators.compose([Validators.required])],
      'active':['',Validators.compose([Validators.required])]
    });
  }
  async send(){
    if(this.form.valid){
      const data=this.form.getRawValue();
      const values={
        "nombre":data.nombre,
        "Estatus":data.activate
      }
      if(!await this.service.createPuestos(data)){
        this.message="No se ha podido generar el puesto";
      }
      else{
        this.route.navigate(["/home"])
      }
    }
    else{
      console.log("no es valido el formulario");
    }
  }
}
