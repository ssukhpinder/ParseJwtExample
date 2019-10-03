import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JwtComponent } from './parse-jwt/jwt.component';

const routes: Routes = [
  {pathMatch:"full",  path:"jwt",component:JwtComponent},
  {path:"jwt",component:JwtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
