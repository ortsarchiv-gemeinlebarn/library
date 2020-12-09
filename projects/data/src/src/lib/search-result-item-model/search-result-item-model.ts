export class SearchResultItemModel
{
    constructor(score: number, item: any)
    {
        this.score = score;
        this.item = item;
    }

    score: number;
    item: any;
}
