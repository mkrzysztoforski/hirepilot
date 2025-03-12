import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <h2>Create an account</h2>
      <form (ngSubmit)="register()">
        <input type="email" [(ngModel)]="email" name="email" placeholder="Email" required />
        <input type="password" [(ngModel)]="password" name="password" placeholder="password" required />
        <button type="submit">register</button>
      </form>
      <p>Masz już konto? <button (click)="goToLogin()">login</button></p>
    </div>
  `,
  styles: [`.container { text-align: center; }`]
})
export class RegisterComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.email, this.password);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
