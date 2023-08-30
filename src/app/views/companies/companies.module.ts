import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompanyComponent } from './company/company.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
    declarations: [
        CompanyComponent
    ],
    imports: [
        CommonModule,
        CompaniesRoutingModule,
        SharedModule
    ]
})
export class CompaniesModule { }
