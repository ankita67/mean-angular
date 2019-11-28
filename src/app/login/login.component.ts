import { Component, OnInit } from '@angular/core';
import{AuthService}from '../auth.service'
import { from } from 'rxjs';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userdetails={
               uname:"",
               password:""

  };



  constructor(private authService:AuthService,
    private router:Router)
   { 

   }

  ngOnInit() {
  }
  message;
  SignIn()
  {
     let invalid= this.authService.CheckUser(this.userdetails);
     if(invalid)
     {
         this.router.navigate(['home'])
     }
     else{
       this.message="uname/password is wrong"
     }
  }

}
