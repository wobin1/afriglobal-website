import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompanyComponent } from './company/company.component';
import { SharedModule } from "../../shared/shared.module";
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    declarations: [
        CompanyComponent
    ],
    imports: [
        CommonModule,
        CompaniesRoutingModule,
        SharedModule,
        FlexLayoutModule
    ]
})
export class CompaniesModule { }
