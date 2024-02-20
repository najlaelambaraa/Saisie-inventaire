import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-inventaire',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventaire.component.html',
  styleUrl: './inventaire.component.scss'
})
export class InventaireComponent {
  savedItems: { titre: string, resultat: string }[] = [];
  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.savedItems = this.dataService.getItems();
  }
  onEditItem(item: any) {
    this.router.navigate([''], { queryParams: { item: JSON.stringify(item) } });
  }
  exportToCSV() {
    let csvData = this.convertToCSV(this.savedItems);
    let blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    FileSaver.saveAs(blob, "inventaire.csv");
  }

  private convertToCSV(objArray: any[]) {
    const array = objArray instanceof Array ? objArray : [objArray];
    let keys = Object.keys(array[0]);
    let result = keys.join(';') + '\n'; 

    array.forEach(item => {
      result += keys.map(key => item[key]).join(';') + '\n'; 
    });

    return result;
  }
 

  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const text = e.target.result;
        const data = this.csvToArray(text);
        console.log(data);
      };
      reader.readAsText(file);
    }
  }

  

  csvToArray(str: string, delimiter = ",") {
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    const arr = rows.map(function (row) {
      const values = row.split(delimiter);
      const el = headers.reduce(function (object: any, header: any, index: any) {
        object[header] = values[index];
        return object;
      }, {});
      return el;
    });

    return arr;
  }
}
