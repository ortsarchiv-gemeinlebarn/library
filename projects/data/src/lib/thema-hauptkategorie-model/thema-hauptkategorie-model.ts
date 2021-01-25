import { ThemaBereichModel } from '../thema-bereich-model/thema-bereich-model';
export class ThemaHauptkategorieModel
{
    public id: number;
    public bereich: ThemaBereichModel;
    public titel: string;
    public abkuerzung: string;
    public sortIndex: number;
}
