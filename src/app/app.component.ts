import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CrytonLoaderComponent} from './cryton-loader/cryton-loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule, RouterLink, RouterOutlet, CrytonLoaderComponent],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <h1>{{title}}</h1>
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
      </a>
      <section class="content">
      <a routerLink="/cryton">Cryton</a>
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AI-Dojo';
}
