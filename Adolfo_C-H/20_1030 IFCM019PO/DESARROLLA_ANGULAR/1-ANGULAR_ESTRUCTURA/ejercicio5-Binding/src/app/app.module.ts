import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*
Importaciones de recursos general, que puede acceder todos los componenetes
Suelen ser recursos que son necesarios por su complejidad de ejecución
o conexiones o acceder a otras librerias. Así pues accedemos a un conjuntos
de directivas que nos nutren de recursos (librerías)
Cómo ejemplo para poder utilizar las estructuras de los formularios, necesitamos
importar una libreria específica:
*/
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
