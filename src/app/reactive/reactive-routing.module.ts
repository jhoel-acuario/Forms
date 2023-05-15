import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { SwithPageComponent } from './pages/swith-page/swith-page.component';

const routes: Routes = [
  {
    path:'' , children:[
      {path:'basic', component:BasicPageComponent},
      {path:'dynamic', component:DynamicPageComponent},
      {path:'switch', component:SwithPageComponent},
      {path:'**', redirectTo:'basic'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }