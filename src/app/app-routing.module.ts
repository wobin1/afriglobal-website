import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './shared/layout/main/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path:'', component: MainComponent, children:[
    {path:"", loadChildren: ()=> import('./views/home/home.module').then(m => m.HomeModule)},
    {path:"", loadChildren: ()=> import('./views/about/about.module').then(m => m.AboutModule)},
    {path:"", loadChildren: ()=> import('./views/career/career.module').then(m => m.CareerModule)},
    {path:"", loadChildren: ()=> import('./views/companies/companies.module').then(m => m.CompaniesModule)},
    {path:"", loadChildren: ()=> import('./views/csr/csr.module').then(m=> m.CsrModule)},
    {path:"", loadChildren: ()=> import('./views/awards/awards.module').then(m=> m.AwardsModule)},
    {path:"", loadChildren: ()=> import('./views/contact/contact.module').then(m => m.ContactModule)}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
