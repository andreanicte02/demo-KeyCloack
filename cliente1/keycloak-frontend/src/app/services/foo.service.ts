import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Foo} from '../models/foo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooService {

  urlService = 'http://localhost:8081/foo';
  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};
  constructor(private httpClient: HttpClient) {

  }

  public list(): Observable<Foo[]> {



    return this.httpClient.get<Foo[]>(this.urlService + '/list', this.httpOptions);
  }

}
