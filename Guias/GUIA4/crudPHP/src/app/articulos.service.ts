import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  url = 'https://jlopzzweb.000webhostapp.com/DPS/GUIA4/src/'

  constructor( private http: HttpClient) { }

  getAll() { return this.http.get(`${this.url}recuperartodos.php`) }

  alta( art:any ) { return this.http.post(`${this.url}alta.php`, JSON.stringify(art)) }

  baja( cod:number ) { return this.http.get(`${this.url}baja.php?codigo=${cod}`) }

  select( cod:number ) { return this.http.get(`${this.url}seleccionar.php?codigo=${cod}`) }

  mod( art:any ) { return this.http.post(`${this.url}modificacion.php`,JSON.stringify(art)) }
}
