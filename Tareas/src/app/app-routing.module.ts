import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasQueHacerComponent } from './Componentes/tareas-que-hacer/tareas-que-hacer.component';
import { TareasEnProcesoComponent } from './Componentes/tareas-en-proceso/tareas-en-proceso.component';
import { TareasTerminadasComponent } from './Componentes/tareas-terminadas/tareas-terminadas.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'tareas-que-hacer' }, 
  { path: 'tareas-que-hacer', component: TareasQueHacerComponent }, 
  { path: 'tareas-en-proceso', component: TareasEnProcesoComponent }, 
  { path: 'tareas-terminadas', component: TareasTerminadasComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
