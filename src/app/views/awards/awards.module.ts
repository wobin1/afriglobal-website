import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwardsRoutingModule } from './awards-routing.module';
import { AwardsComponent } from './awards/awards.component';
import { SharedModule } from "../../shared/shared.module";
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    declarations: [
        AwardsComponent
    ],
    imports: [
        CommonModule,
        AwardsRoutingModule,
        SharedModule,
        FlexLayoutModule
    ]
})
export class AwardsModule { }
