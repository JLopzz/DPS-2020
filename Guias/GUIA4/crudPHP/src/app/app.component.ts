import { Component } from '@angular/core';
import { ArticulosService } from "./articulos.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articulo : any = null

  art = {
    codigo : 0,
    descripcion : null,
    precio : null
  }

  constructor( private serv : ArticulosService){ }

  ngOnInit(){ this.getAll() }

  getAll(){
    this.serv.getAll().subscribe( res => this.articulo = res )
  }

  alta(){
    this.serv.alta(this.art).subscribe( res => {
      if( res['resultado'] == 'OK' ){
        alert(res['mensaje'])
        this.getAll()
        this.art = { codigo : 0, descripcion : null, precio : null }
      }
    })
  }

  baja(cod){
    if(confirm('Esta seguro de eliminar el Registro?')){
      this.serv.baja(cod).subscribe( res => {
        if( res['resultado'] == "OK" ){
          alert(res['mensaje'])
          this.getAll()
        }
      })
    }
  }

  modificar(){
    this.serv.mod(this.art).subscribe( res => {
      if( res['resultado'] == 'OK' ){
        alert(res['mensaje'])
        this.getAll()
        this.art = { codigo : 0, descripcion : null, precio : null }
      }
    })
  }

  select(cod){
    this.serv.select(cod).subscribe( res => this.art = res[0])
  }

  hayRegistros(){ return true }
}
