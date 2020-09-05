import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private account: LoginService, private router: Router) {}

  logout() {
    this.account.logout().then(res => {
      console.log(res);
      this.router.navigate(['login']);
    }).catch(res => {
      console.log(res);
    });
  }

}
