import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HasPuesto, prospectInterface } from './interface/prospectsInterface';
import { ususarioInterface } from './interface/usuarioInterface';
import { loginInterface } from './login/loginInterface';

@Injectable({
  providedIn: 'root'
})
export class UrlPeticionsService {
  private Url:string="http://postulates.devspaceprogrammer.com/";
  public data:prospectInterface[]=[];
  public data_puesto:HasPuesto[]=[];
  public data_usuario:ususarioInterface[]=[];
  constructor(private http:HttpClient) { }
  gettoken():string{
    const cadena=localStorage.getItem("token");
    if(cadena!=null){
      const token:loginInterface=JSON.parse(cadena);
      return token.access_token;
    }
    return "";
  }
  getProspects(search:string=""){
    const auth_token=this.gettoken();
    const header:HttpHeaders = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization',`Bearer ${auth_token}`)
    .set('X-Requested-With',`XMLHttpRequest`);
    const params:HttpParams=new HttpParams().set("nombre",search);
    this.http.post<prospectInterface[]>(this.Url+"api/prospects","",{headers:header,params:params}).subscribe(
      result => {
        this.data=result;
      }
    )
  }
  showProspects(id:string){
    const auth_token=this.gettoken();
    const header:HttpHeaders = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization',`Bearer ${auth_token}`)
    .set('X-Requested-With',`XMLHttpRequest`);
    this.http.get<prospectInterface>(this.Url+`api/prospects/${id}`,{headers:header}).subscribe(
      result => {
        this.data=[result];
        console.log(this.data);
      }
    )
  }
  postProspects(id:string,data:any){
    const auth_token=this.gettoken();
    const header:HttpHeaders = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization',`Bearer ${auth_token}`)
    .set('X-Requested-With',`XMLHttpRequest`);
    console.log(data);
    this.http.put(this.Url+`api/prospects/${id}`,data,{headers:header}).subscribe(
      result=>{
        console.log(result);
      }
    )
  }
  getPuestos(search:string=""){
    const auth_token=this.gettoken();
    const header:HttpHeaders = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization',`Bearer ${auth_token}`)
    .set('X-Requested-With',`XMLHttpRequest`);
    const params:HttpParams=new HttpParams().set("nombre",search);
    this.http.post<HasPuesto[]>(this.Url+"api/puestos","",{headers:header,params:params}).subscribe(
      result => {
        this.data_puesto=result;
        console.log(this.data_puesto)
      }
    )
  }

  showPuestos(id:string){
    const auth_token=this.gettoken();
    const header:HttpHeaders = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization',`Bearer ${auth_token}`)
    .set('X-Requested-With',`XMLHttpRequest`);
    this.http.get<HasPuesto>(this.Url+`api/puestos/${id}`,{headers:header}).subscribe(
      result => {
        this.data_puesto=[result];
        console.log(this.data_puesto)
      }
    )
  }
  async createPuestos(data:any):Promise<boolean>{
    return new Promise((resolve, reject) => {
      const auth_token=this.gettoken();
      const header:HttpHeaders = new HttpHeaders()
      .set('Content-Type','application/json')
      .set('Authorization',`Bearer ${auth_token}`)
      .set('X-Requested-With',`XMLHttpRequest`);
      this.http.post(this.Url+`api/puestos/create`,data,{headers:header}).subscribe(
        result => {
          console.log(result);
          resolve(true);
          return true;

        },
        error=>{
          resolve(false);
          return false;
        }
      )
    });
  }
  deletePuesto(id:string){
    const auth_token=this.gettoken();
    const header:HttpHeaders = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization',`Bearer ${auth_token}`)
    .set('X-Requested-With',`XMLHttpRequest`);
    this.http.delete<HasPuesto>(this.Url+`api/puestos/${id}`,{headers:header}).subscribe(
      result => {
        console.log(this.data_puesto)
      }
    )
  }

  getUsuarios(search:string=""){
    const auth_token=this.gettoken();
    const header:HttpHeaders = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization',`Bearer ${auth_token}`)
    .set('X-Requested-With',`XMLHttpRequest`);
    const params:HttpParams=new HttpParams().set("nombre",search);
    this.http.post<ususarioInterface[]>(this.Url+"api/usuarios","",{headers:header,params:params}).subscribe(
      result => {
        this.data_usuario=result;
      }
    )
  }

}
