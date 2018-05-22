export class Produit
{
        private  nomProduit: string;
        private  prixProduit: Number;
        private  taxe: Number;
        private  importation: Boolean ;
        private  quantite: Number;
        private  checked: Boolean;

        public get _nomProduit(): string{
            return this.nomProduit;
        }

        public get _prixProduit(): Number{
            return this.prixProduit;
        }

        public get _taxe(): Number{
            return this.taxe;
        }

        public get _isChecked(): Boolean{
            return this.checked;
        }

        public get _quantite(): Number{
            return this.quantite;
        }


}