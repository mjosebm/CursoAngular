import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  edad = 23;
  peso = 60;
  altura = 170;
  sexo = 'Femenino';

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  masculino() : void {
    this.sexo = 'Masculino';
  }

  femenino() : void {
    this.sexo = 'Femenino';
  }

  cambiarAltura(event :any) : void{
    this.altura = event.target.value;
  }

  calcularBMI() : void {
    const BMI = this.peso / Math.pow((this.altura/100),2);


    this.router.navigate(['/resultado', BMI.toFixed(1)]);

  }

  

}
