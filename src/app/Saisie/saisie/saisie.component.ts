import { Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../data.service';
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
  savedItems: { titre: string, resultat: string }[] = [];
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
  constructor(private dataService: DataService) {}
  save() {
    const resultat = { titre: this.item.titre, resultat: this.item.resultat };
    this.dataService.saveItem(resultat);
    
  }
  
   
  
}
