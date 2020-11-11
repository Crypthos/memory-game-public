import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import {RegisterComponent} from './components/register/register.component'
import {GameboardComponent} from './components/gameboard/gameboard.component'
import {HomeComponent} from "./mainpage/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {IntroComponent} from "./components/intro/intro.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'intro', component: IntroComponent},
  {path: 'game', component: GameboardComponent},
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
