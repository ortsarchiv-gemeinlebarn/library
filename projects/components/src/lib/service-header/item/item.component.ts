import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'oag-service-header-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit
{
    @Input() public title = '';
    @Input() public subtitle = '';
    @Input() public url = '';
    @Input() public active = false;
    @Input() public target = '_blank';

    constructor() { }
    ngOnInit(): void { }
}