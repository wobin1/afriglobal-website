import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';


const Material=[
  MatSlideToggleModule,
  MatSidenavModule
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule, Material
  ],
  exports: [Material]
})
export class MaterialModule { }
