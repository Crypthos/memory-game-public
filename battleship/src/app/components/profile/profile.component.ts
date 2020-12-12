import { Component, OnInit } from '@angular/core';
import {ProfileDataService} from "../../service/data/profile-data.service";
import {Profile} from "../my-profile/my-profile.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  id: number
  profile: Profile

  constructor(
    private profileService: ProfileDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = (this.route.snapshot.params['id']);
    this.profile = new Profile(this.id,'','');

    if(this.id!=-1){
    this.profileService.retrieveProfile('Team08', this.id)
      .subscribe (
        data => this.profile = data
      )
    }
  }

  saveProfile() {
    if (this.id === -1) {
      // Create Profile
      this.profileService.createProfile('Team08', this.profile)
        .subscribe (
          data => {
            console.log(data);
            this.router.navigate(['myprofile']);
          }
        );
    } else {
      this.profileService.updateProfile('Team08', this.id, this.profile)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['myprofile']);
          }
        );
    }
  }
}
