import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HomepageComponent } from './mainpage/homepage/homepage.component';
import { HeaderComponent } from './mainpage/header/header.component';
import { NavbarComponent } from './mainpage/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    HomepageComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
