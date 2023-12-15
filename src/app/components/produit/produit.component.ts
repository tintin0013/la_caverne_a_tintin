import { Component, Input } from '@angular/core';
import { Produit } from '../../Models/Produit.model';
import { CommonModule } from '@angular/common';
import { ProduitService } from '../../Services/produit.service';
// import { DataproviderService } from '../../Services/dataprovider.service';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
  // constructor(public data: DataproviderService) {}
  constructor(public data: ProduitService) {}

  @Input()
  produit!: Produit;
}
