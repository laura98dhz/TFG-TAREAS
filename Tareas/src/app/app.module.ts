import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasQueHacerComponent } from './Componentes/tareas-que-hacer/tareas-que-hacer.component';
import { TareasEnProcesoComponent } from './Componentes/tareas-en-proceso/tareas-en-proceso.component';
import { TareasTerminadasComponent } from './Componentes/tareas-terminadas/tareas-terminadas.component';
import { MainComponent } from './Componentes/main/main.component';
import { TareaQueHacerItemComponent } from './Componentes/tarea-que-hacer-item/tarea-que-hacer-item.component';
import { TareaEnProcesoItemComponent } from './Componentes/tarea-en-proceso-item/tarea-en-proceso-item.component';
import { TareaTerminadasItemComponent } from './Componentes/tarea-terminada-item/tarea-terminadas-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasQueHacerComponent,
    TareasEnProcesoComponent,
    TareasTerminadasComponent,
    MainComponent,
    TareaQueHacerItemComponent,
    TareaEnProcesoItemComponent,
    TareaTerminadasItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
