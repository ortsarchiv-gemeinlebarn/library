import { ItemDigitalModel } from '../item-digital-model/item-digital-model';
import { ItemExternModel } from '../item-extern-model/item-extern-model';
import { ItemInternModel } from '../item-intern-model/item-intern-model';

export class ItemsModel
{
    public intern: Array<ItemInternModel> = [];
    public extern: Array<ItemExternModel> = [];
    public digital: Array<ItemDigitalModel> = [];
}
