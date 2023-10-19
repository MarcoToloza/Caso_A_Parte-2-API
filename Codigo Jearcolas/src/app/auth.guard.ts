import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('AuthGuard: canActivate() iniciado');
    const isUserLoggedIn = true;

    if (isUserLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']); 
      return false;
    }
  }
}
