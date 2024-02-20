import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SaisieComponent } from "./Saisie/saisie/saisie.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
  <div class="bg-gray-100 h-screen">
  <div class="grid grid-flow-col justify-stretch">
    <div class="flex flex-1">
      <button class="flex-1 bg-orange-400 hover:bg-sky-300 text-white font-bold py-2 px-4 rounded mr-2" (click)="button = 'Saisie'">Saisie</button>
      <button class="flex-1 bg-orange-400 hover:bg-sky-300 text-white font-bold py-2 px-4 rounded">Inventaire</button>
    </div>
  </div>
</div>
@if (button === 'Saisie') {
  <app-saisie></app-saisie>
} 

  <router-outlet></router-outlet>
`,
    imports: [CommonModule, RouterOutlet, SaisieComponent]
})
export class AppComponent {
  title = 'saisie-inventaire';
  button: string = '';
  
}
