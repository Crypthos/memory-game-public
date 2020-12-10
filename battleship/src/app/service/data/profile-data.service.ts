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
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateProfile(username, id, profile) {
    return this.http.put(
      `http://localhost:8080/users/${username}/todos/${id}`
      , profile);
  }
}
