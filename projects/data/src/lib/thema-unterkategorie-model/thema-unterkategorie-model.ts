import { ThemaHauptkategorieModel } from '../thema-hauptkategorie-model/thema-hauptkategorie-model';

export class ThemaUnterkategorieModel
{
    public id: number;
    public titel: string;
    public abkuerzung: string;
    public hauptkategorie: ThemaHauptkategorieModel;
    public sortIndex: number;

    constructor()
    {
        this.hauptkategorie = new ThemaHauptkategorieModel();
    }
}
