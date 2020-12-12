import { ArbeitslisteItemEintragModel } from '../arbeitsliste-item-eintrag-model/arbeitsliste-item-eintrag-model';

export class ArbeitslisteModel
{
    public id: number;
    public titel: string;
    public plannedFor: string | Date;
    public beschreibung: string;
    public archived: boolean;
    public eintraege: Array<ArbeitslisteItemEintragModel> = [];
    public datumErstellt: string | Date;
    public datumBearbeitet: string | Date;
}
