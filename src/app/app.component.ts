import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SaisieComponent } from "./Saisie/saisie/saisie.component";
import { InventaireComponent } from "./Inventaire/inventaire/inventaire.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
  <div class="bg-gray-100 h-screen">
  <div class="grid grid-flow-col justify-stretch">
    <div class="flex flex-1">
      <button class="flex-1 bg-orange-400 hover:bg-sky-300 text-white font-bold py-2 px-4 rounded mr-2" (click)="button = 'Saisie'">Saisie</button>
      <button class="flex-1 bg-orange-400 hover:bg-sky-300 text-white font-bold py-2 px-4 rounded"(click)="button = 'Inventaire'">Inventaire</button>
    </div>
  </div>
</div>
@if (button === 'Saisie') {
  <app-saisie></app-saisie>
} @else if (button == 'Inventaire') {
  <app-inventaire></app-inventaire>
} 

  <router-outlet></router-outlet>
`,
    imports: [CommonModule, RouterOutlet, SaisieComponent, InventaireComponent]
})
export class AppComponent {
  title = 'saisie-inventaire';
  button: string = '';
  
}
