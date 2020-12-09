export class ExternerBesitzerModel
{
    public id: number;
    public type: string;
    public name: string;
    public vorname: string;
    public nachname: string;
    public adresse: string;
    public plz: number;
    public ort: string;
    public land: string;
    public email: string;
    public telefon: string;

    constructor()
    {
        this.type = 'Institution';
    }
}
