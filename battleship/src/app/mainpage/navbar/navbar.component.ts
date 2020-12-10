import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HcAuthenticationService} from "../../service/hc-authentication.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //isUserLoggedIn: boolean = false;
 /* @Output() featureSelected = new EventEmitter<string> ();*/
  //hcAuthenticationService: any;

 /* onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }*/
  constructor(public hcAuthenticationService: HcAuthenticationService) { }

  ngOnInit(): void {
    //this.isUserLoggedIn = this.hcAuthenticationService.isUserLoggedIn();
  }

}
