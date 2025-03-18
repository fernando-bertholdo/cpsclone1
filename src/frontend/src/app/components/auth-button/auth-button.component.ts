import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrl: './auth-button.component.css'
})
export class AuthButtonComponent {

  constructor(public auth: AuthService, private router: Router) {}

  login() {
    this.auth.loginWithRedirect({
      appState: { target: '/home' }
    });
  }
}
