import { Component } from '@angular/core';
import {AuthConfig, NullValidationHandler, OAuthModule, OAuthService} from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keycloak-frontend';
  username: string;
  isLogged: boolean;
  isRoot: boolean;

  constructor(private oauthService: OAuthService) {
    this.configure();
  }

    authConfig: AuthConfig = {
    // Url of the Identity Provider
    issuer: 'http://localhost:8080/auth/realms/demo-real',

    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin ,

    // The SPA's id. The SPA is registerd with this id at the auth-server
    // clientId: 'server.code',
    clientId: 'demo-frontend',

    // Just needed if your auth server demands a secret. In general, this
    // is a sign that the auth server is not configured with SPAs in mind
    // and it might not enforce further best practices vital for security
    // such applications.
    // dummyClientSecret: 'secret',

    responseType: 'code',

    // set the scope for the permissions the client should request
    // The first four are defined by OIDC.
    // Important: Request offline_access to get a refresh token
    // The api scope is a usecase specific one
    scope: 'openid profile email offline_access',

    showDebugInformation: true,
  };


  configure(): void{
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.setupAutomaticSilentRefresh();
    // on promise
    // tslint:disable-next-line:max-line-length
    this.oauthService.loadDiscoveryDocument().then(() => this.oauthService.tryLogin())
      .then( () => {if (this.oauthService.getIdentityClaims()) {
      this.isRoot = this.isAdmin();
      this.isLogged = this.islog();
    }
      });
  }

  public islog(): boolean{
    return (this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken());
  }

  public isAdmin(): boolean{
    const t = this.oauthService.getAccessToken();
    const payLoad = t.split('.')[1];
    const decodeJson = atob(payLoad);
    const decode = JSON.parse(decodeJson);
    return decode.realm_acces.roles.indexOf('real-admin') !== -1 ;
  }


}
