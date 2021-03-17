import { Injectable } from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private oauthService: OAuthService) {

  }


  public getIsLogged(): boolean{
    return (this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken());
  }

  public getAdmin(): boolean{
    const t = this.oauthService.getAccessToken();
    const payLoad = t.split('.')[1];
    const decodeJson = atob(payLoad);
    const decode = JSON.parse(decodeJson);
    return decode.realm_access.roles.indexOf('realm-admin') !== -1;
  }

  public getUsername(): string {
    return this.oauthService.getIdentityClaims()[`preferred_username`];
  }


  public login(): void{
    this.oauthService.initImplicitFlowInternal();
  }

  public logut(): void{

    this.oauthService.logOut();
    // keycloak no soporta el revoke token oauth
  }


}
