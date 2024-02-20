import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private savedItems: { titre: string, resultat: string }[] = [];

  constructor() {
    this.loadItems();
  }

  saveItem(item: { titre: string, resultat: string }) {
    this.savedItems.push(item);
    localStorage.setItem('savedItems', JSON.stringify(this.savedItems));
  }

  getItems(): { titre: string, resultat: string }[] {
    return this.savedItems;
  }

  private loadItems() {
    const savedItemsJSON = localStorage.getItem('savedItems');
    if (savedItemsJSON) {
      this.savedItems = JSON.parse(savedItemsJSON);
    }
  }
}
