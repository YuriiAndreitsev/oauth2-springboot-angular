import { Component } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { AuthService } from '../users/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  title: string = 'App Angular'
  constructor(private authService: AuthService, private router: Router) {

  }

  logout(): void {
    this.authService.logout();
    swal("Logout", `${this.authService.userCheck.username} has logged out!`, "success");
    this.router.navigate(['/login']);
  }
}
