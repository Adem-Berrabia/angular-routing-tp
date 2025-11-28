import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav>
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
        Accueil
      </a>
      <a routerLink="/about" routerLinkActive="active">À propos</a>
      <a routerLink="/contact" routerLinkActive="active">Contact</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      nav {
        padding: 20px;
        background: #333;
      }
      nav a {
        color: white;
        margin: 0 15px;
        text-decoration: none;
      }
      nav a.active {
        color: #42b983;
        font-weight: bold;
      }
    `,
  ],
})
export class AppComponent {}
