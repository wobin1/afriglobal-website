import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';


const Material=[
  MatSlideToggleModule,
  MatSidenavModule,
  MatMenuModule
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule, Material
  ],
  exports: [Material]
})
export class MaterialModule { }
