import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveFormBuilderComponent } from './reactive-form-builder/reactive-form-builder.component';


const routes:Routes= [
{
  path:'home',component:HomeComponent,
}
,
{
  path:'form',component:ReactiveFormBuilderComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
