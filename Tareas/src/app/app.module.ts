import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasQueHacerComponent } from './Componentes/tareas-que-hacer/tareas-que-hacer.component';
import { TareasEnProcesoComponent } from './Componentes/tareas-en-proceso/tareas-en-proceso.component';
import { TareasTerminadasComponent } from './Componentes/tareas-terminadas/tareas-terminadas.component';
import { MainComponent } from './Componentes/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasQueHacerComponent,
    TareasEnProcesoComponent,
    TareasTerminadasComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
