import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'oag-eintrag-id-formatted-prefix',
    templateUrl: './eintrag-id-formatted-prefix.component.html',
    styleUrls: ['./eintrag-id-formatted-prefix.component.scss']
})
export class EintragIdFormattedPrefixComponent implements OnInit
{
    @Input() public eintrag = null;
    @Input() public size: number = 20;

    constructor() { } // NOSONAR
    public ngOnInit() { } // NOSONAR
}
