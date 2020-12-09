import { BestandModel } from '../bestand-model/bestand-model';

export class ThemaHauptkategorieModel
{
    public id: number;
    public bestand: BestandModel;
    public titel: string;
    public abkuerzung: string;
    public sortIndex: number;
}
