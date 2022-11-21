import { Component, Input } from '@angular/core';
import { resultado } from '../calculadora/resultado';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {

  @Input() itemResul: resultado;
  @Input() index: number;
  
}
