export class Film {
        private id: string;
        private  note: number;
        private  prix: number;
        private  nomFilm: string;
        private  categorie: string;
        private  date: string;
        private  lieu: string;
        private  durree: number;
        constructor(note: number, prix: number, nomFilm: string, categorie: string, date: string, lieu: string, durree: number )
        {
            this.note = note;
            this.prix = prix;
            this.nomFilm = nomFilm;
            this.categorie = categorie;
            this.date = date;
            this.lieu = lieu;
            this.durree = durree;
        }

        public set _id(_id: string){
            this.id = _id;
        }
}
