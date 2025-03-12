import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <h2>Logowanie</h2>
      <form (ngSubmit)="login()">
        <input type="email" [(ngModel)]="email" name="email" placeholder="Email" required />
        <input type="password" [(ngModel)]="password" name="password" placeholder="password" required />
        <button type="submit">login</button>
      </form>
      <p>Nie masz konta? <button (click)="goToRegister()">register</button></p>
    </div>
  `,
  styles: [`.container { text-align: center; }`]
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
