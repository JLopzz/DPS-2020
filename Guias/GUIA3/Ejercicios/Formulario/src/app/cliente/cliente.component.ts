import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente'

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  nacionalidad : string[] = ["",'El Salvador', 'Mexico', 'Rusia', 'Mongolia'];
  cliente = new Cliente(1,'','',23)
  enviar : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() : void{ this.enviar = true }

}
