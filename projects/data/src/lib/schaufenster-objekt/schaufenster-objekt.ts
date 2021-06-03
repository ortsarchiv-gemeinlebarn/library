import { EintragSchaufensterModel } from "../eintrag-schaufenster-model/eintrag-schaufenster-model";
import { SchaufensterObjektBestandteilModel } from "../schaufenster-objekt-bestandteil/schaufenster-objekt-bestandteil";

export class SchaufensterObjektModel
{
    public id: number;
    public beginn: Date | string;
    public ende: Date | string;
    public anmerkung: string;
    public eintrag: EintragSchaufensterModel;
    public bestandteile: Array<SchaufensterObjektBestandteilModel>;
}