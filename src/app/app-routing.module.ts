import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'formarray-demo',
  loadChildren: () => import('./formarray-demo/formarray-demo.module').then((m)=>m.FormarrayDemoModule)
},
{
  path:'dynamic-form',
  loadChildren: () => import('./dynamic-form/dynamic-form.module').then((m)=>m.DynamicFormModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
