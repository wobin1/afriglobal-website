import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './shared/layout/main/main.component';

const routes: Routes = [
  {path:'', component: MainComponent, children:[
    {path:"", loadChildren: ()=> import('./views/home/home.module').then(m => m.HomeModule)},
    {path:"", loadChildren: ()=> import('./views/about/about.module').then(m => m.AboutModule)}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
