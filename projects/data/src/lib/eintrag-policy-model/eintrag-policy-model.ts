import { PolicyModel } from "../policy-model/policy-model";

export class EintragPolicyModel
{
    public policy: PolicyModel;
    public start: Date = null;
    public end: Date = null;
    public notes: string = null;

    constructor() { }

    public isToBeApplied()
    {
        if (this.start == null && this.end == null)
            return true;

        const now = new Date();

        if (this.start != null && this.end == null)
            return now >= this.start;

        if (this.start == null && this.end != null)
            return now <= this.end;

        return now >= this.start && now <= this.end
    }
}
