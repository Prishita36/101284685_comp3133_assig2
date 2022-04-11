import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authAccess();
  }
  authAccess(): true | UrlTree{
    let isLoggedIn = localStorage.getItem('isLoggedIn');

    if(isLoggedIn == 'true'){
      return true
    } else {
      return this.router.parseUrl('/login');
    }
  }
}