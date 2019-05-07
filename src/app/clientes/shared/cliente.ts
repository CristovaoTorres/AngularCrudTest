import { NgSelectOption } from '@angular/forms';

export class Cliente {
  nome: string = 'Cristovão';
  carros: any[] = [
    { id: 1, modelo: 'Gol', selected: false },
    { id: 2, modelo: 'Saveiro', selected: true },
  ];
}