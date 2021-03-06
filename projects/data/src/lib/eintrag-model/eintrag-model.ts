import { BestandModel } from '../bestand-model/bestand-model';
import { DatierungModel } from '../datierung-model/datierung-model';
import { EintragPolicyModel } from '../eintrag-policy-model/eintrag-policy-model';
import { EreignisModel } from '../ereignis-model/ereignis-model';
import { ItemsModel } from '../items-model/items-model';
import { MediumHauptkategorieModel } from '../medium-hauptkategorie-model/medium-hauptkategorie-model';
import { MediumUnterkategorieModel } from '../medium-unterkategorie-model/medium-unterkategorie-model';
import { PersonModel } from '../person-model/person-model';
import { SerieModel } from '../serie-model/serie-model';
import { TagsModel } from '../tags-model/tags-model';
import { ThemaBereichModel } from '../thema-bereich-model/thema-bereich-model';
import { ThemaHauptkategorieModel } from '../thema-hauptkategorie-model/thema-hauptkategorie-model';
import { ThemaUnterkategorieModel } from '../thema-unterkategorie-model/thema-unterkategorie-model';
import { VerortungModel } from '../verortung-model/verortung-model';

export class EintragModel
{
    public id: number;
    public idFormatted: string;
    public idFormattedPrefix: string;
    public bestand: BestandModel;
    public titel: string;
    public kommentar: string;
    public datierung: DatierungModel;
    public themaUnterkategorie: ThemaUnterkategorieModel;
    public themaHauptkategorie: ThemaHauptkategorieModel;
    public themaBereich: ThemaBereichModel;
    public mediumUnterkategorie: MediumUnterkategorieModel;
    public mediumHauptkategorie: MediumHauptkategorieModel;
    public mediumFreitext: string;
    public tags: TagsModel;
    public personen: Array<PersonModel> = [];
    public quelleName: string;
    public quelleInfos: string;
    public urheberBekannt: boolean;
    public urheberName: string;
    public urheberInfos: string;
    public verortung: VerortungModel;
    public items: ItemsModel;
    public ereignisse: Array<EreignisModel> = [];
    public serien: Array<SerieModel> = [];
    public policies: Array<EintragPolicyModel> = [];
    public datumAufnahme: string | Date;
    public datumBearbeitet: string | Date;

    constructor()
    {
        this.urheberBekannt = false;
        this.datierung = new DatierungModel();
        this.tags = new TagsModel();
        this.items = new ItemsModel();
        this.verortung = new VerortungModel();
    }
}
