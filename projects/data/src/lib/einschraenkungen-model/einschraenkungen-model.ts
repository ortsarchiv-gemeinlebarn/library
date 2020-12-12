export class EinschraenkungenModel
{
    public externeNutzungsordnungBool: boolean;
    public externeNutzungsordnungInfo: string;
    public urheberRegelschutzfristBool: boolean;
    public urheberRegelschutzfristEndeDatum: string | Date;
    public urheberEinverstaendnis: boolean;
    public archivBool: boolean;
    public archivInfo: string;
    public berechtigungslevelOverride: number;

    constructor()
    {
        this.externeNutzungsordnungBool = false;
        this.urheberRegelschutzfristBool = false;
        this.urheberEinverstaendnis = false;
        this.archivBool = false;
    }
}
