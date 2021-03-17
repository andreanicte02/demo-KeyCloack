import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() isLogged: boolean;
  @Input() isRoot: boolean;

  constructor(private loginS: LoginService) { }

  ngOnInit(): void {
  }

  public login(): void{
    this.loginS.login();
  }


  public logout(): void{
    this.loginS.login();
  }

}
