import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'oag-service-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
{
    constructor() { }
    ngOnInit(): void { }

    public items = [
        {
            slug: "website",
            title: "Ortsarchiv",
            subtitle: "Information & Statistik",
            url: "https://www.ortsarchiv-gemeinlebarn.org",
            target: "_blank"
        },
        {
            slug: "schaufenster",
            title: "Schaufenster",
            subtitle: "Gemeinlebarner Topothek",
            url: "https://schaufenster.ortsarchiv-gemeinlebarn.org",
            target: "_blank"
        },
        {
            slug: "findbuch",
            title: "Findbuch",
            subtitle: "Verwaltung & Recherche",
            url: "https://findbuch.ortsarchiv-gemeinlebarn.org",
            target: "_blank"
        }
    ];

    @Input() public active = this.items[0].slug;
}
