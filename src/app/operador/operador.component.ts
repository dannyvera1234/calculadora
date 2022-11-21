import { Component, Input } from '@angular/core';
import { resultado } from '../calculadora/resultado';

@Component({
  selector: 'app-operador',
  templateUrl: './operador.component.html',
  styleUrls: ['./operador.component.css']
})
export class OperadorComponent {

  operadorA: number ;
  operadorB: number ;

  
  // resultado: number =0;

  Resultado: resultado[] = [];

  sumainput() {

    let resultado1 = new resultado(this.operadorA , this.operadorB);

    this.Resultado.push(resultado1);
  }

}
