import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LogoutComponent} from './logout/logout.component';
import {FrontComponent} from './front/front.component';
import {UploadComponent} from './upload/upload.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { state: 'login' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { state: 'register' }
  },
  {
    path: 'logout',
    component: LogoutComponent,
    data: { state: 'logout' }
  },
  {
    path: 'front',
    component: FrontComponent,
    data: { state: 'front' }
  },
  {
    path: 'upload',
    component: UploadComponent,
    data: { state: 'upload' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
