import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsrRoutingModule } from './csr-routing.module';
import { CsrComponent } from './csr/csr.component';
import { SharedModule } from "../../shared/shared.module";
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    declarations: [
        CsrComponent
    ],
    imports: [
        CommonModule,
        CsrRoutingModule,
        SharedModule,
        FlexLayoutModule
    ]
})
export class CsrModule { }
