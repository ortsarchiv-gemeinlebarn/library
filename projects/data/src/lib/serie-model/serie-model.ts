import { EintragModel } from '../eintrag-model/eintrag-model';

export class SerieModel
{
    public id: number;
    public name: string;
    public eintraege: Array<EintragModel>;
}
