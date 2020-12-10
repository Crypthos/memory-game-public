import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import {RegisterComponent} from './components/register/register.component'

import {HomeComponent} from "./mainpage/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {IntroComponent} from "./components/intro/intro.component";
import {GameCardComponent} from "./components/game-card/game-card.component";
import {GameComponent} from "./components/game/game.component";
import {ChatFormComponent} from "./components/chat-module/chat-form/chat-form.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'chat', component: ChatFormComponent},
  {path: 'about', component:AboutComponent},
  {path: 'intro', component: IntroComponent},
  {path: 'game', component: GameComponent},
  {path: 'login', component: LoginComponent,
     children: [{path: 'register', component: RegisterComponent}]},
  {path: 'register', component: RegisterComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
