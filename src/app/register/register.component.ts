import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HasPuesto } from '../admin/interface/prospectsInterface';
import { UrlPeticionsService } from '../admin/url-peticions.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!:FormGroup;
  datas:File[]=[];
  list:any[]=[]
  puestos:HasPuesto[]=[];
  message:string='';
  Estatus:Boolean=true;
  constructor(private fromb:FormBuilder,private http:HttpClient,private service:UrlPeticionsService) { }

  ngOnInit(): void {
    this.form=this.fromb.group({
      'nombre':['',Validators.compose([Validators.required])],
      'app':['',Validators.compose([Validators.required])],
      'apm':['',Validators.compose([Validators.required])],
      'email':['',Validators.compose([Validators.required,Validators.email])],
      'calle':['',Validators.compose([Validators.required])],
      'numero':['',Validators.compose([Validators.required])],
      'col':['',Validators.compose([Validators.required])],
      'cp':['',Validators.compose([Validators.required])],
      'phone':['',Validators.compose([Validators.required])],
      'rfc':['',Validators.compose([Validators.required])],
      'puesto':['',Validators.compose([Validators.required])],
    });
    this.service.getPuestos();
  }
  get(){
    return this.service.data_puesto
  }
  add(val:any){
    const file:File = val.target.files[0];
    this.datas.push(file);
    this.list=this.list.concat(...val.target.files);
    console.log(this.datas);
    console.log(this.list);
  }

  send(){
    console.log("sa");
    if(this.form.valid){
      const formData = this.form.getRawValue();
      const data = new FormData();
      for(let i=0;i<this.datas.length;i++){
        data.append("nameFile[]",this.datas[i]);
      }
      data.append("nombre",formData.nombre);
      data.append("app",formData.app);
      data.append("apm",formData.apm);
      data.append("calle",formData.calle);
      data.append("numero",formData.numero);
      data.append("col", formData.col);
      data.append("cp",formData.cp);
      data.append("email",formData.email);
      data.append("phone",formData.phone);
      data.append("puesto",formData.puesto);
      data.append("rfc",formData.rfc);
      data.append("grant_type", 'password');
      data.append("client_id", "2");
      data.append("client_secret",'LYmFJusiC5doqlM5dHGN3Efb0eSGmcPWJZw0Fkqk');
      data.append("scope","'*'");
      this.http.post("http://postulates.devspaceprogrammer.com/api/register",data).subscribe(
        (result) => {
          this.list=[];
          this.datas=[];
          this.form.reset();
          this.message="se ha enviado de manera exitosa";
          this.Estatus=true;
          setTimeout(() => {
            this.message="";
          }, 3000);

        },
        error => {
          this.message="Ha ocurrido algun error";
          this.Estatus=false;
          setTimeout(() => {
            this.message="";
          }, 3000);
        }
      );
    }
    else{
      console.log("invalido");
    }
  }
}
