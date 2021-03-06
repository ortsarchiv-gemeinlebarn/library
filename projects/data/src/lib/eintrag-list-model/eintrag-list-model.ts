import { BestandModel } from "../bestand-model/bestand-model";

export class EintragListModel
{
    public id: number;
    public idFormatted: string;
    public idFormattedPrefix: string;
    public bestand: BestandModel;
    public titel: string;
    public datierung: any;
    public themaUnterkategorie: any;
    public mediumUnterkategorie: any;
    public verortung: any;
}
