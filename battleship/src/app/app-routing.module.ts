import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from  './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import  { GameboardComponent } from  './components/gameboard/gameboard.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'game', component: GameboardComponent},
  {path: 'login', component: LoginComponent,
    children:[{
    path: 'register',
      component: RegisterComponent
    }]
    },
  {path: 'register', component: RegisterComponent}
]




@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
