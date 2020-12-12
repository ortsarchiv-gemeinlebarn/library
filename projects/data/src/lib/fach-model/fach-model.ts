import { KastenModel } from '../kasten-model/kasten-model';

export class FachModel
{
    public id: number;
    public spalte: number;
    public reihe: number;
    public name: string;
    public beschreibung: string;
    public kasten: KastenModel;
}
