import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

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
    return this.http.get<HelloGamerBean>(`http://localhost:8080/hello-gamer/path-variable/${name}`);
    //console.log("Excecute Hello Gamer Bean Service")
  }

}
