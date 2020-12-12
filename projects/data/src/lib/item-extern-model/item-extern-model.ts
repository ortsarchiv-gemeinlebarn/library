import { EintragModel } from '../eintrag-model/eintrag-model';
import { ExternerBesitzerModel } from '../externer-besitzer-model/externer-besitzer-model';
import { FarbraumModel } from '../farbraum-model/farbraum-model';
import { OriginalitaetModel } from '../originalitaet-model/originalitaet-model';

export class ItemExternModel
{
    public id: number;
    public idFormatted: string;
    public idFormattedPrefix: string;
    public eintrag: EintragModel;
    public groesse: string;
    public originalitaet: OriginalitaetModel;
    public farbraum: FarbraumModel;
    public externeSignatur: string;
    public externerBesitzer: ExternerBesitzerModel;
    public beschreibung: string;
    public datumAufnahme: string | Date;
    public datumBearbeitet: string | Date;
}
