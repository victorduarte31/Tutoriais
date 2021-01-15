import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulariosDinamicosComponent } from './formularios-dinamicos/formularios-dinamicos.component';

const routes: Routes = [
  {path: 'campos-dinamicos', component: FormulariosDinamicosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
