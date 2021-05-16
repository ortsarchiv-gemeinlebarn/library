import { DatierungADModel } from '../datierung-ad-model/datierung-ad-model';
import { EintragListModel } from '../eintrag-list-model/eintrag-list-model';
import { KontextualisierungModel } from '../kontextualisierung-model/kontextualisierung-model';
import { PersonModel } from '../person-model/person-model';
import { PriorisierungModel } from '../priorisierung-model/priorisierung-model';
import { ThemaBereichModel } from '../thema-bereich-model/thema-bereich-model';
import { ThemaHauptkategorieModel } from '../thema-hauptkategorie-model/thema-hauptkategorie-model';
import { ThemaUnterkategorieModel } from '../thema-unterkategorie-model/thema-unterkategorie-model';

export class EreignisModel
{
    public id: number;
    public titel: string;
    public datierung: DatierungADModel;
    public beschreibung: string;
    public quellen: string = null;
    public kontextualisierung: KontextualisierungModel = null;
    public priorisierung: PriorisierungModel = null;
    public themaBereich: ThemaBereichModel = null;
    public themaHauptkategorie: ThemaHauptkategorieModel = null;
    public themaUnterkategorie: ThemaUnterkategorieModel = null;
    public personen: Array<PersonModel> = [];
    public eintraege: Array<EintragListModel> = [];

    constructor()
    {
        this.datierung = new DatierungADModel();
    }
}
