import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard {
  constructor(private router: Router) { }

  canActivate(): boolean {
    const user = sessionStorage.getItem('user');

    if (user) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
