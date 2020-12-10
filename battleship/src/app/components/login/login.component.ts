import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {HcAuthenticationService} from "../../service/hc-authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'team08'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //Router
  //Angular.giveMeRouter
  //Dependency Injection
  constructor(private router: Router,
              private hcAuthenticatinServices: HcAuthenticationService) {
  }

  ngOnInit(): void {
  }

  handleLogIn() {
    /*console.log(this.username);
    console.log(this.password);*/
    // if (this.username === 'team08' && this.password === 'dummy') {
    if (this.hcAuthenticatinServices.authenticate(this.username, this.password)) {
      // Redirect to game page
      this.router.navigate(['game', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

  handleSignIn() {
    /*console.log(this.username);*/
          // Redirect to register page
     this.router.navigate(['register'])
    }

}
