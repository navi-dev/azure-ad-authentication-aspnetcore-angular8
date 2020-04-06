import { Component } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-client';
  accessToken: string;

  /**
   *
   */
  constructor(private adalService: MsAdalAngular6Service) {

  }


  login(): void {
    this.adalService.login();
  }

  logout(): void {
    this.adalService.logout();
  }

  getLoggedInUser(): any {
    return this.adalService.LoggedInUserEmail;
  }

  getAccessToken(): Observable<any> {
    return this.adalService.acquireToken('http://localhost:58127');
  }

  getToken(): string {
    return this.adalService.accessToken;
  }
}
