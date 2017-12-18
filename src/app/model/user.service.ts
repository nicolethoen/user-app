import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user';
import { USERS } from './mock-users';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {

  private usersUrl = 'http://jsonplaceholder.typicode.com/users';

  constructor(
  	private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
  	return this.http.get<User[]>(this.usersUrl);
  }

  getUser(i): Observable<User> {
    return this.http.get<User>(this.usersUrl + '/' + i);
  }

}
