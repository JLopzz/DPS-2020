import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registro : string[] = []
  alumno : any
  nombre : string
  mayor : string
  edad : number
  contador: number

  constructor() { }

  ngOnInit(): void {
    this.edad = 0
    this.nombre = ''
    this.contador = 0
  }

  ingresar():void{
    console.log('click')
    this.edad>0&&this.edad<18? this.mayor = 'No' : this.mayor = 'Si'
    this.alumno = {
      "nombre" : this.nombre,
      "edad" : this.edad,
      "mayor" : this.mayor
    }
    this.registro.push(this.alumno)
    this.contador++
  }

}
