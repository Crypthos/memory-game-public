import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {HcAuthenticationService} from "./hc-authentication.service";


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
      private hcAuthenticationService: HcAuthenticationService,
      private router: Router
  ) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(this.hcAuthenticationService.isUserLoggedIn())
          return true;

      this.router.navigate(['welcome'])


      return false;
  }

}
