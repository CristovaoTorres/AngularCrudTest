import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import {Validators} from '@angular/forms';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  cliente: Cliente;

  constructor() { }

  ngOnInit() {

    this.cliente = new Cliente();
    console.log(this.cliente);
  }


  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.cliente);
    // ao instanciar novamente o objeto cliente, você vai limpar os controles na tela
    this.cliente = new Cliente();
  }
}