import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .container {
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
      text-align: center;
    }
  `]
})
export class AppComponent {
  title = 'interview-tracker';
}
