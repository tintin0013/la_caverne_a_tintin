import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Produit } from '../Models/Produit.model';
import { ProduitComponent } from '../components/produit/produit.component';
import { ProduitService } from '../Services/produit.service';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SiderComponent } from '../components/sider/sider.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProduitComponent,HeaderComponent,FooterComponent,SiderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
  ListProduit: Produit[] = this.produit.ListProduit;
  
  
  constructor(public produit: ProduitService) {}

  // addProduit(){
  //   this.produit.addProduit()
  // }

  // ListProduit: Produit[] = [
  //   {
  //     id:1,
  //     nom:"MacBook air 13'",
  //     description:"ordinateur portable Apple ",
  //     prix:"1249",
  //     image:"assets/mb-air-13'.png",

  //   },
  //   {
  //     id:2,
  //     nom:"MacBook Pro 16'",
  //     description:"ordinateur portable Apple modele pro ",
  //     prix:"4449",
  //     image:"assets/mb-pro-16'.png",
  //   },
  //   {
  //     id:3,
  //     nom:"Iphone 15 PRO",
  //     description:"Smartphone Apple modele pro ",
  //     prix:"1349",
  //     image:"assets/iphone-15_pro.png",
  //   },
  //   {
  //     id:4,
  //     nom:"Apple Watch 9",
  //     description:"Montre connectée Apple modele 9 ",
  //     prix:"549",
  //     image:"assets/apple-watch.png",

  //   }
  // ]
}
