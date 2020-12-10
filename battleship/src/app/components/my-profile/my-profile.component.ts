import { Component, OnInit } from '@angular/core';
import {ProfileDataService} from "../../service/data/profile-data.service";

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
  /*profiles = [
    new Profile(1,'Name : ', 'Team08'),
    new Profile(2,'Email : ', 'team08@hva.nl'),
    new Profile(3,'Password : ', '*********')
  ]
*/
  constructor(
    private profileService: ProfileDataService
  ) { }

  ngOnInit(): void {
    this.profileService.retrieveAllProfiles('team08').subscribe(
      response => {
        console.log(response);
                this.profiles = response;
      }
    )
  }

}
