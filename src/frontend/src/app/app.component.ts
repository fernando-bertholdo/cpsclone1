import { Component, computed, effect, inject, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  template: `
    <app-header *ngIf="showHeader()"></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    main {
      padding-block: 24px;
    }
  `]
})
export class AppComponent {
  title = 'my_app';
  private router = inject(Router);
  private currentUrl = signal('');

  showHeader = computed(() => this.currentUrl() !== '/login');

  constructor() {
    // Escuta mudanças de rota
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl.set(event.urlAfterRedirects); // Atualiza o sinal com a URL correta
      });

    // Debug opcional
    effect(() => console.log("Current Route:", this.currentUrl()));
  }
}
