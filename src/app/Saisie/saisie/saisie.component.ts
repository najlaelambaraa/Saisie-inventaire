import { Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-saisie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './saisie.component.html',
  styleUrl: './saisie.component.scss'
})
export class SaisieComponent {
  titre: string = '';
  calcul: string = '';
  resultat: number | null = null;
  unite: string = '';
  Calculer(){
    try {
      this.resultat = eval(this.calcul);
    } catch (e) {
      this.resultat = null;
      console.error('Erreur de calcul', e);
    }
  }
  
}
