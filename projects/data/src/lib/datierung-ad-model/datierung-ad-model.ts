import { DatumADModel } from '../datum-ad-model/datum-ad-model';

export class DatierungADModel
{
    public von: DatumADModel;
    public bis: DatumADModel;
    public text: string;

    constructor()
    {
        this.von = new DatumADModel();
        this.bis = new DatumADModel();
        this.text = null;
    }
}
