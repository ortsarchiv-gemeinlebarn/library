import { BehaeltnisModel } from '../behaeltnis-model/behaeltnis-model';
import { EintragModel } from '../eintrag-model/eintrag-model';
import { FachModel } from '../fach-model/fach-model';
import { FarbraumModel } from '../farbraum-model/farbraum-model';
import { OriginalitaetModel } from '../originalitaet-model/originalitaet-model';

export class ItemInternModel
{
    public id: number;
    public idFormatted: string;
    public idFormattedPrefix: string;
    public eintrag: EintragModel;
    public farbraum: FarbraumModel;
    public groesse: string;
    public beschreibung: string;
    public behaeltnis: BehaeltnisModel | null;
    public aufstellungsFach: FachModel | null;
    public originalitaet: OriginalitaetModel;
    public datumAufnahme: string | Date;
    public datumBearbeitet: string | Date;
}
