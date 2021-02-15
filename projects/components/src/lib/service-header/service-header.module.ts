import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';

@NgModule({
    declarations: [
        HeaderComponent,
        ItemComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HeaderComponent,
        ItemComponent
    ]
})
export class ServiceHeaderModule { }
