import { Component, OnInit } from '@angular/core';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  username:string;

  password:string;

  flag:boolean;

  constructor() { }

  ngOnInit() {}

  login() :void {
    
    let username:string = (document.getElementById('email') as HTMLInputElement).value;
    let password:string = (document.getElementById('pass') as HTMLInputElement).value;

    if(this.isValidAccount(username, password)) {
      console.log("Auth exitoso!");
    }
    else {
      console.log("Auth failed!");
    }
  }

  isValidAccount(user:string, pass:string) :boolean {
    this.flag = false;
    if(this.isValidUser(user) && this.isValidPass(pass)){
      this.flag = true;
    }
    return this.flag;
  }

  isValidUser(user:string) :boolean {
    let flag:boolean = false;
    if(user.includes('@')) {
      flag = true;
    }
    return flag;
  }

  isValidPass(pass:string) :boolean {
    let flag:boolean = false;
    if(pass.length > 4) {
      flag = true;
    }
    return flag;
  }

  getFireBaseUser(user:string) {

  }

}
