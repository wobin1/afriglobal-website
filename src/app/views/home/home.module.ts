import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { AwardsComponent } from './awards/awards.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    AwardsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class HomeModule { }
