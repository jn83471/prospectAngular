import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginInterface } from './loginInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!:FormGroup;
  constructor(private fromb:FormBuilder,private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.form=this.fromb.group({
      'user':['',Validators.compose([Validators.required,Validators.email])],
      'password':['',Validators.compose([Validators.required])]
    });
  }
  login(){
    if(this.form.valid){
      const formData = this.form.getRawValue();
      const data = {
        user: formData.user,
        pass: formData.password,
        grant_type: 'password',
        client_id: 2,
        client_secret: 'LYmFJusiC5doqlM5dHGN3Efb0eSGmcPWJZw0Fkqk',
        scope: '*'
      };
      this.http.post<loginInterface>("http://postulates.devspaceprogrammer.com/api/user",data).subscribe(
        (result:loginInterface) => {
          console.log('success');
          localStorage.setItem("token",JSON.stringify(result));
          this.router.navigate(['/home']);
        },
        error => {
          console.log('error');
          console.log(error);
        }
      );
    }
    else{
      console.log("invalido");
    }

  }

}
