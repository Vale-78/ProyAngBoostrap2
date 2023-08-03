import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnePostComponent } from './one-post/one-post.component';

const routes: Routes = [
  // ruta que quiero luego de la url de mi página.
  // si entra a esa ruta, le estoy pidiendo que utilice la clase OnePostComponent que creé en one-post.comp-ts
  {path:'post/:id', component:OnePostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
