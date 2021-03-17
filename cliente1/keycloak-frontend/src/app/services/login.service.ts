import { Injectable } from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private oauthService: OAuthService) {

  }

  public login(): void{
    this.oauthService.initImplicitFlowInternal();
  }

  public logut(): void{

    this.oauthService.logOut();
    // keycloak no soporta el revoke token ouath
  }

  public getIsLogged(): boolean{
    return (this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken());
  }

  public getAdmin(): boolean{
    const t = this.oauthService.getAccessToken();
    const payLoad = t.split('.')[1];
    const decodeJson = atob(payLoad);
    const decode = JSON.parse(decodeJson);
    return decode.realm_acces.roles.indexOf('real-admin') !== -1 ;
  }



}
