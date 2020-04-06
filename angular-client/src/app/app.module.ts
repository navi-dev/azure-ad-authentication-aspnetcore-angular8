import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MsAdalAngular6Module } from 'microsoft-adal-angular6';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsAdalAngular6Module.forRoot({
      tenant: 'angular application tenant id',
      clientId: 'angular application client id',
      redirectUri: 'URI on which you want to redirect user after login',
      endpoints: {
        'api application url': 'api application client id', // this is for feteching the access token
      },
      navigateToLoginRequestUrl: false,
      cacheLocation: '<localStorage / sessionStorage>',
      postLogoutRedirectUri: 'URI on which you want to redirect user after logout',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
