import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerRoutingModule } from './career-routing.module';
import { CareerComponent } from './career/career.component';
import { SharedModule } from "../../shared/shared.module";
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    declarations: [
        CareerComponent
    ],
    imports: [
        CommonModule,
        CareerRoutingModule,
        SharedModule,
        FlexLayoutModule
    ]
})
export class CareerModule { }
