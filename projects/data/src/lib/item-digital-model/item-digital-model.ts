import { EintragModel } from '../eintrag-model/eintrag-model';

export class ItemDigitalModel
{
    public id: number;
    public idFormatted: string;
    public idFormattedPrefix: string;
    public eintrag: EintragModel;
    public aufloesungX: number;
    public aufloesungY: number;
    public nachbearbeitet: boolean;
    public beschreibung: string;
    public datum: string | Date;
    public seitenAnzahl: number;
    public coverThumbnail: string;
    public datumAufnahme: string | Date;
    public datumBearbeitet: string | Date;
}
