import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

export class HelloGamerBean {
  constructor(public message: string){ }
}

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloGamerBeanService() {
    return this.http.get<HelloGamerBean>('http://localhost:8080/hello-gamer-bean');
    //console.log("Excecute Hello Gamer Bean Service")
  }
//http://localhost:8080/hello-gamer/path-variable/team08
  executeHelloGamerServiceWithPathVariable(name) {
    let basicAuthHeaderString = this.CreateBasicAuthenticationHttpHeader();

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
      }

    )

    return this.http.get<HelloGamerBean>(`http://localhost:8080/hello-gamer/path-variable/${name}`,
      {headers});
    //console.log("Excecute Hello Gamer Bean Service")
  }

  CreateBasicAuthenticationHttpHeader(){
    let username = 'Team08'
    let password = 'dummy'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }

  // Access to XMLHttpRequest at
  // 'http://localhost:8080/hello-gamer/path-variable/team08'
  // from origin 'http://localhost:4200' has been blocked by CORS policy:
  // No 'Access-Control-Allow-Origin' header is present on the requested resource.


  // Access to XMLHttpRequest at
  // 'http://localhost:8080/hello-gamer/path-variable/team08'
  // from origin 'http://localhost:4200' has been blocked by CORS policy:
  // Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
}
