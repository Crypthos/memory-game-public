import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import {RegisterComponent} from './components/register/register.component'

import {HomeComponent} from "./mainpage/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {IntroComponent} from "./components/intro/intro.component";
import {GameCardComponent} from "./components/game-card/game-card.component";
import {GameComponent} from "./components/game/game.component";
import {ErrorComponent} from "./components/error/error.component";
import {ChatComponent} from "./components/chat/chat.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {RouteGuardService} from "./service/route-guard.service";
import {MyProfileComponent} from "./components/my-profile/my-profile.component";



const routes: Routes = [
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'welcome', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  //{path: 'intro', component: IntroComponent},
  {path: 'game/:name', component: GameComponent, canActivate: [RouteGuardService]},
  {path: 'game', component: GameComponent, canActivate: [RouteGuardService]},
  {path: 'chat', component: ChatComponent, canActivate: [RouteGuardService]},
  {path: 'myprofile', component: MyProfileComponent, canActivate: [RouteGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  {path: 'register', component: RegisterComponent},
 /* ,
     children: [{path: 'register', component: RegisterComponent}]},*/
  // {path: 'register', component: RegisterComponent},
  {path: '**', component: ErrorComponent}
];


@NgModule({
  declarations: [],
  // imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
