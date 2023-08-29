import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsrRoutingModule } from './csr-routing.module';
import { CsrComponent } from './csr/csr.component';


@NgModule({
  declarations: [
    CsrComponent
  ],
  imports: [
    CommonModule,
    CsrRoutingModule
  ]
})
export class CsrModule { }
