import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-inventaire',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventaire.component.html',
  styleUrl: './inventaire.component.scss'
})
export class InventaireComponent {
  savedItems: { titre: string, resultat: string }[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.savedItems = this.dataService.getItems();
  }
}
