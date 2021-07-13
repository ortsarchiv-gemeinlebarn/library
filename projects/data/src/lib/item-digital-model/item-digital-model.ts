import { EintragModel } from '../eintrag-model/eintrag-model';
import { ItemDigitalPageModel } from '../item-digital-page-model/item-digital-page-model';

export class ItemDigitalModel
{
    public id: number;
    public idFormatted: string;
    public idFormattedPrefix: string;
    public eintrag: EintragModel;
    public type: string;
    public nachbearbeitet: boolean;
    public beschreibung: string;
    public datum: string | Date;
    public glacierArchiveId: string;
    public glacierSize: number;
    public glacierSHA256TreeHash: string;
    public glacierCreationDate: string | Date;
    public datumAufnahme: string | Date;
    public datumBearbeitet: string | Date;
    public thumbnail: string;
    public pages: Array<ItemDigitalPageModel> = [];
    public mediaFile: string;
}
