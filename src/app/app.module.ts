import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {FrontComponent} from './front/front.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {UploadComponent} from './upload/upload.component';
import {MediaService} from './services/media.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule, MatCardModule,
  MatDrawer, MatDrawerContainer, MatFormFieldModule, MatGridList,
  MatGridListModule,
  MatIconModule, MatInputModule, MatListModule, MatNavList, MatSidenavModule,
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ThumbnailPipe } from './pipes/thumbnail.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    TopBarComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    UploadComponent,
    ThumbnailPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      FormsModule, // tää on tärkee aina kun mikään formi/input
      MatGridListModule,
      BrowserAnimationsModule,
      MatIconModule,
      MatSidenavModule,
      MatListModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatCardModule
  ],
  providers: [MediaService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
