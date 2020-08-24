import { Component, OnInit } from '@angular/core';
import { tokenReference } from '@angular/compiler';

class Empleado{

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nombre : [ string , boolean ] 
  sueldo : [ number , boolean] 
  data : string[] = [];

  ngOnInit(){
    this.nombre = [ '', false ]
    this.sueldo = [ null, false ]
  }

  validName() : void { this.nombre[1] = this.nombre[0] == ""? false : true }
  validSueldo() : void { this.sueldo[1] = isNaN(this.sueldo[0]) || this.sueldo[0].toString() == ''? false : true }

  addData():void{
    let emp : any = {
      "nombre" : this.nombre[0],
      "sueldo" : this.sueldo[0],
      "afp" : (this.sueldo[0] * 0.051).toFixed(2),
      "isss" : (this.sueldo[0] * 0.073).toFixed(2),
      "renta" : (this.sueldo[0] * 0.11).toFixed(2),
      "total" :( this.sueldo[0] * (0.051 + 0.073 + 0.11)).toFixed(2),
      "neto" : (this.sueldo[0] * ( 1 - (0.051 + 0.073 + 0.11) )).toFixed(2)
    }
    this.data.push(emp)
    this.ngOnInit()
  }
}
