import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styles: ``
})
export class ProfileSidebarComponent {
  userName: string | null;

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('user');
  }
}
