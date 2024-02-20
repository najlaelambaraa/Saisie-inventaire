import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
  <div class="p-2 w-full flex gap-2 bg-sky-500">
  <h1 class="text-2xl text-white">Saisie d'inventaire</h1>
  <a class="hover:text-sky-200" routerLink="/messenger">Saisie</a>
  <a class="hover:text-sky-200" routerLink="/project">inventaire</a>
  </div>
  <router-outlet></router-outlet>
`
})
export class AppComponent {
  title = 'saisie-inventaire';
}
