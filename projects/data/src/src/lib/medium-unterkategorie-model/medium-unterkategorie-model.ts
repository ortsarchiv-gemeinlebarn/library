import { MediumHauptkategorieModel } from '../medium-hauptkategorie-model/medium-hauptkategorie-model';

export class MediumUnterkategorieModel
{
    public id: number;
    public titel: string;
    public hauptkategorie: MediumHauptkategorieModel;
    public topothekKategoriepfad: string;
    public sortIndex: number;

    constructor()
    {
        this.hauptkategorie = new MediumHauptkategorieModel();
    }
}
