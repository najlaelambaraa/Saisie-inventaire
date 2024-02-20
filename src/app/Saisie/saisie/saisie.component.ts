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
  public item= {
  titre: '',
  calcul:  '',
  resultat:'',
  unite:  '',
  };
  calculate(){
    try {
      this.item.resultat = eval(this.item.calcul);
    } catch (e) {
      this.item.resultat = "";
      console.error('Error Calculate', e);
    }
  }
  addCalcul(value: string){
    this.item.calcul += value;
  }
  clear() {
    this.item.titre = '';
    this.item.calcul = '';
    this.item.resultat = '';
    this.item.unite = ''; 
  }
}
