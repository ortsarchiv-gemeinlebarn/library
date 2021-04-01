import { BestandModel } from "../bestand-model/bestand-model";

export class EintragMinimalModel
{
    public id: number;
    public idFormatted: string;
    public idFormattedPrefix: string;
    public bestand: BestandModel;
    public titel: string;
}