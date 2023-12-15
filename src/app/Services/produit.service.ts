import { Injectable } from '@angular/core';
import { Produit } from '../Models/Produit.model';
import { Rubrique } from '../Models/Categorie';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  ListProduit: Produit[] = [
    {
      id:1,
      nom:"MacBook air 13'",
      description:"ordinateur portable Apple ",
      prix:"1249",
      image:"https://i.imgur.com/9L4XlYi.png",
      rubrique: "Ordinateur",

    },
    {
      id:2,
      nom:"MacBook Pro 16'",
      description:"ordinateur portable Apple modele pro ",
      prix:"4449",
      image:"https://i.imgur.com/6p4v6JF.png",
      rubrique: "Ordinateur",
    },
    {
      id:3,
      nom:"Iphone 15 PRO",
      description:"Smartphone Apple modele pro ",
      prix:"1349",
      image:"https://i.imgur.com/xBVozTg.png",
      rubrique: "Telephone",
    },{
      id:4,
      nom: "Vision Pro",
      description:"casque de realité virtuelle",
      prix:"3499",
      image:"https://i.imgur.com/wRDsDdn.png",
      rubrique: "Casque",
    },
    {
      id:5,
      nom: "Homepods",
      description:"enceinte connecté",
      prix:"119",
      image:"https://i.imgur.com/7dI8Qhd.png",
      rubrique: "Enceinte",
    },
    {
      id:6,
      nom:"Apple Watch 9",
      description:"Montre connectée Apple modele 9 ",
      prix:"549",
      image:"https://i.imgur.com/a4NssfA.png",
      rubrique: "Montre",
    },
    {
      id:7,
      nom:"Ipad Pro",
      description:"Tablette tactile modele Pro ecran 10' ",
      prix:"1449",
      image:"https://i.imgur.com/k7Zb0kp.png",
      rubrique: "Tablette",
    },
    {
      id:8,
      nom:"Airpods Pro",
      description:"Ecouteurs Intra-Auriculaire ",
      prix:"249",
      image:"https://i.imgur.com/pj1Jieh.png",
      rubrique: "Casque",
    },
    {
      id:9,
      nom:"Ipad Mini",
      description:"Tablette tactile modele Pro ecran 7'  ",
      prix:"549",
      image:"https://i.imgur.com/bSoQ00t.png",
      rubrique: "Tablette",
    }
  ]


  constructor() { }

  ListProduitFiltre: Produit[] = this.ListProduit

  filtre(rubrique: string){
    this.ListProduitFiltre = this.ListProduit.filter((p) => p.rubrique == rubrique);
  }

  addProduit() {
    // this.ListProduit.push({
    //   id:5,
    //   nom: "Homepods",
    //   description:"enceinte connecté",
    //   prix:"129",
    //   image:"assets/HomePods.png",
    //   rubrique: "Enceinte",
    // })
  }

}
