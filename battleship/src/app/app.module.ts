import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './mainpage/home/home.component';
import { HeaderComponent } from './mainpage/header/header.component';
import { NavbarComponent } from './mainpage/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from "./components/about/about.component";
import { IntroComponent } from "./components/intro/intro.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameCardComponent } from './components/game-card/game-card.component';
import { GameComponent } from './components/game/game.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { ResetGameComponent } from './components/reset-game/reset-game.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ChatFormComponent } from './components/chat-module/chat-form/chat-form.component';
import { ErrorComponent } from './components/error/error.component';
import { ChatComponent } from './components/chat/chat.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import {HttpIntercepterBasicAuthService} from "./service/http/http-intercepter-basic-auth.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    IntroComponent,
    HeaderComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    GameCardComponent,
    GameComponent,
    ResetGameComponent,
    ChatFormComponent,
    ErrorComponent,
    ChatComponent,
    LogoutComponent,
    MyProfileComponent,
    ProfileComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    DragDropModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:HttpIntercepterBasicAuthService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
