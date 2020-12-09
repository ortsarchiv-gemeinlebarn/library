export class PersonModel
{
    public id: number;
    public label: string;
    public vorname: string;
    public nachname: string;
    public suffix: string;
    public spitzname: string;
    public geburtsjahr: number;
    public sterbejahr: number;
    public notizen: string;
    public sucheFreigabe: boolean;

    constructor()
    {
        this.sucheFreigabe = false;
    }
}
