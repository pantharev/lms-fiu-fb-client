import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import decode from 'jwt-decode';

import { environment } from '@environments/environment';
import { User } from '@app/core/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, public router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('FB_user')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): User {
     return this.currentUserSubject.value;
   }

   login(email: string, password: string) {
     return this.http.post<any>(`${environment.apiURL}/auth/login`, { email, password })
            .pipe(map(user => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
              return user;
            }));
   }

   loginWithFB(user){
     this.currentUserSubject.next(user);
   }

   logout() {
     // remove user from local storage to log user out
     return this.http.get(`${environment.apiURL}/auth/logout`).pipe(map(user => {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
     }));
     localStorage.removeItem('currentUser');
     this.currentUserSubject.next(null);
   }

   logoutFromFB(){
     localStorage.removeItem('FB_user');
     this.currentUserSubject.next(null);
   }

   canActivate(route: ActivatedRouteSnapshot): boolean {
     if(!this.currentUserValue){
       return;
     }

    const expectedRole = route.data.expectedRole;

    if(!expectedRole){
      return true;
    }

    //const tokenPayload: User = decode(this.currentUserValue.token);

    /*if(tokenPayload.role === "admin"){
      return true;
    }*/

    if(this.currentUserValue.role === "admin"){
      return true;
    }

    if(this.currentUserValue.role !== expectedRole){
      console.log("Not " + expectedRole);
      this.router.navigate(['/']);
      return false;
    }

    /*if (tokenPayload.role !== expectedRole) {
      console.log("Not " + expectedRole);
      this.router.navigate(['/']);
      return false;
    }*/
    
    return true;
  }
}
