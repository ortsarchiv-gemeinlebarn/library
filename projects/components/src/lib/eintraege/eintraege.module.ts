import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EintragIdFormattedPrefixComponent } from './eintrag-id-formatted-prefix/eintrag-id-formatted-prefix.component';

@NgModule({
    declarations: [
        EintragIdFormattedPrefixComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        EintragIdFormattedPrefixComponent
    ]
})
export class EintraegeModule { }
