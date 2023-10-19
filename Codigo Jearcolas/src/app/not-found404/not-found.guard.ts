import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotFoundGuard implements CanLoad {

  constructor(private router: Router) {}

  canLoad(): boolean {
    // Redirige a la página de error 404
    this.router.navigateByUrl('/not-found404', { skipLocationChange: true });
    return false;
  }
}