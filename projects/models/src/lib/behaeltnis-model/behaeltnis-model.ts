import { BestandModel } from '../bestand-model/bestand-model';
import { FachModel } from '../fach-model/fach-model';

export class BehaeltnisModel
{
    public id: number;
    public idFormatted: string;
    public bestand: BestandModel;
    public name: string;
    public namePrint: string;
    public namePrintUntertitel: string;
    public inhalt: string;
    public fach: FachModel;
    public type: string;
    public groesse: string;
}
