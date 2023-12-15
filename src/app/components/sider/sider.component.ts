import { Component } from '@angular/core';
import { Rubrique } from '../../Models/Categorie';
import { CommonModule } from '@angular/common';
import { ProduitService } from '../../Services/produit.service';

@Component({
  selector: 'app-sider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sider.component.html',
  styleUrl: './sider.component.css'
})
export class SiderComponent {

  constructor(private data: ProduitService) {}

  rubrique: string[] = [
    Rubrique.Ordinateur,
    Rubrique.Telephone,
    Rubrique.Montre,
    Rubrique.Enceinte,
    Rubrique.Casque,
    Rubrique.Tablette
  ];

  onClick(rubrique: string) {
    this.data.filtre(rubrique);
  }

}
