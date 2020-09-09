import { Component } from '@angular/core';
import { Alumno } from './models/alumno'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudAng';

  alumnoArray : Alumno[] = [
    {id: 1, name: "Alex",   lastname: "Campos",   age: 35, dir : 'Col America', tel : '1234-5671', email : 'correo@dom.com'},
    {id: 2, name: "Maria",  lastname: "Lopez",    age: 20, dir : 'Col La Palma', tel : '1234-5672', email : 'email@domin.net'},
    {id: 3, name: "Juan",   lastname: "Castro",   age: 25, dir : 'Av las Moritas', tel : '1234-5673', email : 'otro.correo@dom.snn'}
  ]
  selectedAlumno : Alumno = {
    id: 0,
    name : '',
    lastname : '',
    age : null, 
    dir : '', 
    tel : '', 
    email : ''
  }

  openForEdit( al : Alumno ) : void{ this.selectedAlumno = al }

  addOrEdit() : void {
    if(this.selectedAlumno.id === 0){
      this.selectedAlumno.id = this.alumnoArray.length + 1
      this.alumnoArray.push(this.selectedAlumno)
    }
    this.selectedAlumno = { id: 0, name : '', lastname : '', age : null, dir : '', tel : '', email : '' }
  }

  delete() : void{
    if(confirm('Esta seguro de elimniar el Registro?')){
      this.alumnoArray = this.alumnoArray.filter( x => x != this.selectedAlumno )
      this.selectedAlumno = { id: 0, name : '', lastname : '', age : null, dir : '', tel : '', email : '' }
    }
  }

  cancel() : void{
    this.selectedAlumno = { id: 0, name : '', lastname : '', age : null, dir : '', tel : '', email : '' }
  }

  print(obj:any){ console.log(obj)}
}
