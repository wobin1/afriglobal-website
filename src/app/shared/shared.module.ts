import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TwoSectionCardComponent } from './components/two-section-card/two-section-card.component';
import { BusinessUnitsComponent } from './components/business-units/business-units.component';
import { FootprintComponent } from './components/footprint/footprint.component';
import { MaterialModule } from '../material/material.module';
import { AboutSectionCardComponent } from './components/about-section-card/about-section-card.component';
import { MissionCardComponent } from './components/mission-card/mission-card.component';
import { TeamComponent } from './components/team/team.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavbarComponent,
    TwoSectionCardComponent,
    BusinessUnitsComponent,
    FootprintComponent,
    AboutSectionCardComponent,
    MissionCardComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    TwoSectionCardComponent,
    BusinessUnitsComponent,
    FootprintComponent,
    FooterComponent,
    HeaderComponent,
    AboutSectionCardComponent,
    MissionCardComponent,
    TeamComponent
  ]
})
export class SharedModule { }
