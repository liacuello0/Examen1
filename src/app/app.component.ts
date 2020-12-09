import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Examen1';
  guardados = [{}];
  valor1: number;
  valor2: number;
  resultado:number;
  obteniendo : any;

  constructor(){
  
  }

  eliminartodo(){
    localStorage.clear();
  }
  
  suma(){
    this.resultado = this.valor1 + this.valor2;

    this.guardados = [{
      primero : this.valor1,
      segundo : this.valor2,
      res : this.resultado,
    }];

    localStorage.setItem("Suma", JSON.stringify(this.guardados));
    this.obteniendo = JSON.parse(localStorage.getItem("Suma"));
    console.log(this.obteniendo);
  }
  resta(){
    this.resultado = this.valor1 - this.valor2;

    this.guardados = [{
      primero : this.valor1,
      segundo : this.valor2,
      res : this.resultado,
    }];

    localStorage.setItem("Resta", JSON.stringify(this.guardados));
    this.obteniendo = JSON.parse(localStorage.getItem("Resta"));
    console.log(this.obteniendo);
  }
  multiplicacion(){
    this.resultado = this.valor1 * this.valor2;

    this.guardados = [{
      primero : this.valor1,
      segundo : this.valor2,
      res : this.resultado,
    }];

    localStorage.setItem("Multiplicacion", JSON.stringify(this.guardados));
    this.obteniendo = JSON.parse(localStorage.getItem("Multiplicacion"));
    console.log(this.obteniendo);
  }
  division(){
    this.resultado = this.valor1 / this.valor2;

    this.guardados = [{
      primero : this.valor1,
      segundo : this.valor2,
      res : this.resultado,
    }];

    localStorage.setItem("Division", JSON.stringify(this.guardados));
    this.obteniendo = JSON.parse(localStorage.getItem("Division"));
    console.log(this.obteniendo);
  }
}