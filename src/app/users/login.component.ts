import { Component, OnInit } from '@angular/core';
import { User } from "./user";
import swal from "sweetalert2";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title: string = 'Please, Sign In';
  user: User;

  constructor(private authService: AuthService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      swal("Login", `Hello ${this.authService.userCheck.username}`, "info");
      this.router.navigate['/clientes'];
    }
  }

  login(): void {
    console.log(this.user);
    if (this.user.username == null || this.user.password == null) {
      swal('Error Login', 'Username or Password is empty', 'error');
      return;
    }

    this.authService.login(this.user).subscribe(resp => {
      this.authService.saveUser(resp.access_token);
      this.authService.saveToken(resp.access_token);
      let user = this.authService.userCheck;
      this.router.navigate(['/clientes']);
      swal('Login', `Hello, ${user.username}, authorized successfuly`, "success");
    },
      err => {
        if (err.status == 400) {
          swal("Error SignIn", "Username or password Incorrect", "error");
        }

      });
  }
}
