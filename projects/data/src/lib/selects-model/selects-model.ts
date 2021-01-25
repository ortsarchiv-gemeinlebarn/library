import { BehaeltnisModel } from '../behaeltnis-model/behaeltnis-model';
import { BestandModel } from '../bestand-model/bestand-model';
import { ExternerBesitzerModel } from '../externer-besitzer-model/externer-besitzer-model';
import { FachModel } from '../fach-model/fach-model';
import { FarbraumModel } from '../farbraum-model/farbraum-model';
import { KastenModel } from '../kasten-model/kasten-model';
import { KontextualisierungModel } from '../kontextualisierung-model/kontextualisierung-model';
import { MediumHauptkategorieModel } from '../medium-hauptkategorie-model/medium-hauptkategorie-model';
import { MediumUnterkategorieModel } from '../medium-unterkategorie-model/medium-unterkategorie-model';
import { OriginalitaetModel } from '../originalitaet-model/originalitaet-model';
import { PersonModel } from '../person-model/person-model';
import { PriorisierungModel } from '../priorisierung-model/priorisierung-model';
import { TagModel } from '../tag-model/tag-model';
import { ThemaBereichModel } from '../thema-bereich-model/thema-bereich-model';
import { ThemaHauptkategorieModel } from '../thema-hauptkategorie-model/thema-hauptkategorie-model';
import { ThemaUnterkategorieModel } from '../thema-unterkategorie-model/thema-unterkategorie-model';

export class SelectsModel
{
    public readonly bestaende: Array<BestandModel>;
    public readonly themaBereiche: Array<ThemaBereichModel>;
    public readonly themaHauptkategorien: Array<ThemaHauptkategorieModel>;
    public readonly themaUnterkategorien: Array<ThemaUnterkategorieModel>;
    public readonly mediumHauptkategorien: Array<MediumHauptkategorieModel>;
    public readonly mediumUnterkategorien: Array<MediumUnterkategorieModel>;
    public readonly farbraeume: Array<FarbraumModel>;
    public readonly originalitaeten: Array<OriginalitaetModel>;
    public readonly tags: Array<TagModel>;
    public readonly personen: Array<PersonModel>;
    public readonly externeBesitzer: Array<ExternerBesitzerModel>;
    public readonly kontextualisierungen: Array<KontextualisierungModel>;
    public readonly priorisierungen: Array<PriorisierungModel>;
    public readonly faecher: Array<FachModel>;
    public readonly kaesten: Array<KastenModel>;
    public readonly behaeltnisse: Array<BehaeltnisModel>;
}
