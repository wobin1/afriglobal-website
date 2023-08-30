import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from "../../shared/shared.module";
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        ContactRoutingModule,
        SharedModule,
        FlexLayoutModule
    ]
})
export class ContactModule { }
