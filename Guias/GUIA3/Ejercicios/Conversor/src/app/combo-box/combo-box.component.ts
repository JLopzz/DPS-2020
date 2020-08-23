import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css']
})
export class MyCombo implements OnInit {

  unidades : string[];
  opcionSeleccionado;
  valorCM : number;
  valorConversion : number;

  constructor() { }

  ngOnInit(): void {
    this.unidades = ['Pulgada', 'Metro','Kilometro']
    this.opcionSeleccionado = "Selecciona"
    this.valorCM = 0
    this.valorConversion = 0
  }

  capturar() : void{
    switch(this.opcionSeleccionado){
      case 'Pulgada' : this.valorConversion = this.valorCM * 0.39370; break;
      case 'Metro' : this.valorConversion = this.valorCM / 100; break;
      case 'Kilometro' : this.valorConversion = this.valorCM / 100; break;
    }
  }
}
