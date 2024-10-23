import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const user = sessionStorage.getItem('user');

    if (user) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
