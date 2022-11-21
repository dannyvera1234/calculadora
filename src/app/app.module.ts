import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { OperadorComponent } from './operador/operador.component';
import { ResultadoComponent } from './resultado/resultado.component';


const routes: Routes = [
  {path:'' ,component: CalculadoraComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    OperadorComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
