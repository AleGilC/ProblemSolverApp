import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5050/api/auth/';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


constructor(private http: HttpClient) {
  this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('token')));
}

public get currentUserValue(): User {
  return this.currentUserSubject.value;
}

  login(model: any) {
   return this.http.post(this.baseUrl + 'login', model).pipe(
     map((response: any) => {
       const user = response;
       if (user) {
         localStorage.setItem('token', user.token);
       }
     })
   );
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }
}
