import { Injectable } from '@angular/core';
import {HelloGamerBean} from "./game-data.service";
import {HttpClient} from "@angular/common/http";
import {Profile} from "../../components/my-profile/my-profile.component";

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllProfiles(username) {
    return this.http.get<Profile[]>(`http://localhost:8080/users/${username}/profile`);
    //console.log("Excecute Hello Gamer Bean Service")
  }

  deleteProfile(username, id) {
    return this.http.delete(`http://localhost:8080/users/${username}/profile/${id}`);
  }

  retrieveProfile(username, id) {
    return this.http.get<Profile>(`http://localhost:8080/users/${username}/profile/${id}`);
  }

  updateProfile(username, id, profile) {
    return this.http.put(
      `http://localhost:8080/users/${username}/profile/${id}`, profile);
  }

  createProfile(username, profile) {
    return this.http.post(
      `http://localhost:8080/users/${username}/profile}`
      , profile);
  }
}
