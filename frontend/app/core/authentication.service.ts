import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationDto } from '../models/authenticationDto';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private urlBase = 'http://localhost:5000/authentication';

  constructor(private httpClient: HttpClient) { }

  
  public login(username: string, password: string): Observable<AuthenticationDto>{
    console.log(`AuthenticationService::login ${username}`);
    const url = `${this.urlBase}/authenticate`;
    return this.httpClient.post<AuthenticationDto>(url, {username: username, password: password})
    .pipe(
      tap(user => {
        if(user && user.token) {
          sessionStorage.setItem('currentUser', JSON.stringify(user));
        }
      })
    );
  }

  public logout(): void{
    console.log('AuthenticationService::logout');
    sessionStorage.removeItem('currentUser');
  }
}
