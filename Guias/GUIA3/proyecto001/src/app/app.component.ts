import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Rodriguez Pablo'
  edad = 40
  email = 'rpablo@gmail.com'
  sueldos = [ 1700, 1600, 1900 ]
  activo = true

  esActivo():string {
    if(this.activo) return "Trabajador Activo"
    else return "Trabajador Inactivo"
  }
  ultimos3Suelos(){
    let suma = 0
    for (let i = 0; i < this.sueldos.length; i++) {
      suma += this.sueldos[i]
    }
    return suma
  }
}
