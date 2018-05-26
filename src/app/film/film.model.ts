export class Film {
        private  note: number;
        private  prix: number;
        private  nomFilm: string;
        private  categorie: string;
        private  date: string;
        private  lieu: string;
        constructor(note: number, prix: number, nomFilm: string, categorie: string, date: string, lieu: string)
        {
            this.note = note;
            this.prix = prix;
            this.nomFilm = nomFilm;
            this.categorie = categorie;
            this.date = date;
            this.lieu = lieu;
        }
}