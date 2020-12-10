import { Component, OnInit } from '@angular/core';

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

  profiles = [
    new Profile(1,'Name : ', 'Team08'),
    new Profile(2,'Email : ', 'team08@hva.nl'),
    new Profile(3,'Password : ', '*********')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
