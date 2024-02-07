import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormarrayDemoComponent } from './formarray-demo.component';

const routes: Routes = [{
  path: '',
  component:FormarrayDemoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormarrayDemoRoutingModule { }
