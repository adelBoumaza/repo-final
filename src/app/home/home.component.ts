import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Produit } from './produit.model';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

    produits: any;
    quantite: Number = 0;
    total = 0;
    panier: Array<Produit> = new Array<Produit>();

    constructor(private homeService: HomeService) {
    }

    ngOnInit(): void {
        this.homeService.searchAll()
         .subscribe(resp => {
            this.produits = resp;
          console.log(this.produits);
         }, err => {
            console.log('errors' + err);
         });
    }

    addToPanier(item) {
        console.log(item);
          this.produits.forEach(element => {
              if (item.id === element.id) {
                    this.homeService.calculate(item)
                    .subscribe(resp => {
                            element.prixUnitaireTTC = resp;
                            this.total = this.total + resp;
                    }, err => {
                            console.log('resp' + err);
                    });
                    element.checked = true;
                    this.panier.push(element);
              }
          });
    }

    removeToPanier(item) {
        this.produits.forEach((element) => {
            if (item.id === element.id) {
                this.total = this.total - element.prixUnitaireTTC;
                element.quantite = 1;
                const index = this.panier.indexOf(item);
                this.panier.splice(index, 1);
            }
            if (this.panier.length === 0) {
                this.total = 0;
            }
        });
    }

    displayPanier() {
    }
}
