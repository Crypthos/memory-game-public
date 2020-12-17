import { Injectable } from '@angular/core';
import {ChatMessage} from "../components/models/chat-message.model";
import {HcAuthenticationService} from "./hc-authentication.service";
import {Observable} from "rxjs";
import {io} from 'socket.io-client';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {AngularFireAuth} from "@angular/fire/auth";

const SOCKET_ENDPOINT = 'localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  user: any;
  chatMessages: AngularFireList <ChatMessage[]>;
  chatMessage: ChatMessage;
  userName: Observable<string>;


  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(auth =>{
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }
    })
  }

  sendMessage(msg: string){
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: msg,
      timeSent: timestamp,
      userName: this.userName,
      email: email });
  }

  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCDate() + '/' + (now.getUTCMonth() + 1) + '/' + now.getUTCFullYear();
    const time = now.getUTCHours() + ':' + now.getUTCMinutes() + ':' + now.getUTCSeconds();

    return (date + ' ' + time);
  }


  private getMessages(): AngularFireList<ChatMessage[]> {
    //  query to create our message feed binding
    return this.db.list('messages', ref => {
      let query = ref.limitToLast(25).orderByKey();
      return query;
    });

  }
}
