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

}
