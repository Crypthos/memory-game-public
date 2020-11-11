import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './mainpage/home/home.component';
import { HeaderComponent } from './mainpage/header/header.component';
import { NavbarComponent } from './mainpage/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GameboardComponent } from './components/gameboard/gameboard.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from "./components/about/about.component";
import { IntroComponent } from "./components/intro/intro.component";

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
    GameboardComponent,

  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        DragDropModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
