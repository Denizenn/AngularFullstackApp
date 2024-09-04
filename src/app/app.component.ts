import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CrytonLoaderComponent} from './cryton-loader/cryton-loader.component';
import { OAuthService } from 'angular-oauth2-oidc';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule, RouterLink, RouterOutlet, CrytonLoaderComponent, CommonModule], // Add CommonModule to the imports array
  template: `
    <main>
      <a [routerLink]="['/home']">
        <header class="brand-name">
          <h1>{{title}}</h1>
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
        </a>
        <h1 *ngIf="!userName">Welcome!</h1>
        <h1 *ngIf="userName">Hello, {{userName}}!</h1>
        <p>Welcome to this demo-application.</p>
        <p>
            <button (click)="login()" class="btn btn-default">Login</button>
            <button (click)="logout()" class="btn btn-default">Logout</button>
        </p>    
        <p>
            Username/Passwort: max/geheim
        </p>
      <section class="content">
      <a routerLink="/cryton">Cryton</a>
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AI-Dojo';

  constructor(private oauthService: OAuthService) {

    // URL of the SPA to redirect the user to after login
    this.oauthService.redirectUri = window.location.origin + "/index.html";

    // The SPA's id. The SPA is registerd with this id at the auth-server
    this.oauthService.clientId = "angular-client";

    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    this.oauthService.scope = "openid profile email ";

    // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
    // OAuth2-based access_token
    this.oauthService.oidc = true; // ID_Token

    // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
    // instead of localStorage
    this.oauthService.setStorage(sessionStorage);

    // Discovery Document of your AuthServer as defined by OIDC
    let url = 'http://localhost:8080/realms/Test-dev/.well-known/openid-configuration';

    // Load Discovery Document and then try to login the user
    this.oauthService.loadDiscoveryDocument(url).then(() => {

      // This method just tries to parse the token(s) within the url when
      // the auth-server redirects the user back to the web-app
      // It dosn't send the user the the login page
      this.oauthService.tryLogin({});

    });
  }

  public login() {
    this.oauthService.initImplicitFlow();
}

public logout() {
    this.oauthService.logOut();
}

public get userName() {

    var claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;

    return claims['given_name'];
}
}
