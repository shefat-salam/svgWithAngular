import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SvgimgComponent} from '../app/svgimg/svgimg.component';
const routes: Routes = [
  {path:'svg',component:SvgimgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
