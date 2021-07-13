import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi : number;
  resultado : string;
  interpretacion : string;
  


  constructor(private route: ActivatedRoute) { 
    this.bmi = +route.snapshot.paramMap.get('valor')!;
    this.resultado = '';
    this.interpretacion = '';
    

  }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado(){
    if (this.bmi <20){
      this.resultado = 'Bajo Peso';
      this.interpretacion = 'Tienes un peso corporal inferior al normal, se recomienda cuidar su alimentacion.'

    }else if (this.bmi >=20 && this.bmi <25){
      this.resultado = 'Peso Normal';
      this.interpretacion = 'Tienes un peso corporal normal, Felicidades!'

    }else if(this.bmi >=25 && this.bmi <29 ) {
      this.resultado = 'Exceso de peso';
      this.interpretacion = 'Tienes un peso corporal superior al normal, se recomienda cuidar su alimentación y ejercitarse.'
    }else if(this.bmi >=29  && this.bmi <35){
      this.resultado = 'Obesidad';
      this.interpretacion = 'Tienes un peso corporal superior al normal, se recomienda cuidar su alimentación y realizar ejercicio al menos 3 veces por semana.'
    }else {
      this.resultado = 'Obesidad Extrema';
      this.interpretacion = 'Tienes un peso corporal muy superior al normal, se recomienda consultar a su médico, cuidar su alimentación y realizar ejercicio con frecuencia.'

    }
  }
}
