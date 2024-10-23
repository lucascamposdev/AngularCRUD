import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {

  constructor(private route: Router){}

  logout(){
    sessionStorage.removeItem('user');
    this.route.navigate(['auth/login'])
  }
}
