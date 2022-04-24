import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  
  }

  sesion(){
    this.http.get<any>("http://localhost:3000/users")

    .subscribe(res => {
      const usuario = res.find((dato:any)=>{
        return dato.Usuario === this.loginForm.value.email && dato.Password === this.loginForm.value.password
      });

      if(usuario){
        this.loginForm.reset();
        this.router.navigate(['pokedex'])
      }
      
      else{
        alert("No existe el usuario");
      }

    },err=>{
      alert("Something went wrong")
    })

  
  }
}
