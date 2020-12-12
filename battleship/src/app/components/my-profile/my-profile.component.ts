import { Component, OnInit } from '@angular/core';
import {ProfileDataService} from "../../service/data/profile-data.service";
import {Router} from "@angular/router";

export class Profile {
  constructor(
    public id,
    public name,
    public description
  ){  }
}

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {


  profiles: Profile[];
  message: String;
  /*profiles = [
    new Profile(1,'Name : ', 'Team08'),
    new Profile(2,'Email : ', 'team08@hva.nl'),
    new Profile(3,'Password : ', '*********')
  ]
*/
  constructor(
    private profileService: ProfileDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshProfiles();
  }

  refreshProfiles(){
    this.profileService.retrieveAllProfiles('team08').subscribe(
      response => {
        console.log(response);
        this.profiles = response;
      }
    );
  }

  deleteProfile(id) {
    console.log(`delete profile ${id}`);
    this.profileService.deleteProfile('team08', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Profile ${id} Succesful!`;
        this.refreshProfiles();
      }
    );
  }

  updateProfile(id) {
    console.log(`update ${id}`);
    this.router.navigate(['profile', id]);
  }

  addProfile(){
    this.router.navigate(['profile', -1]);
  }
}
