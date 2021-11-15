export interface Product {
  id: number;
  imovel: string;
  valorContato: string;
  enderecoDisponibilidade: string;
 
}

export const products = [
  {
    id: 1,
    imovel: 'Casa com dois dormitórios e com sacada',
    valorContato: 'Diaria de R$ 100,00 contato (51)998523265',  
    enderecoDisponibilidade: 'Av. Caxias, 2525,Imbé, disponivel janeiro,fevereiro e março de 2022',
    
  },
  {
    id: 2,
    imovel: 'Apt dois dormitórios e área de serviço',
    valorContato: 'Diaria de R$ 80,00 contato (51)983542600',
    enderecoDisponibilidade: 'Av. Emancipação, 2526, tramandaí, disponivel janeiro e fevereiro de 2022',
    
  },
  {
    id: 3,
    imovel: 'Apt três dormitórios com uma suite ',
    valorContato: 'Diaria de R$ 110,00 contato (51)965274123',
    enderecoDisponibilidade: 'Av. Osório, 951, Tramandaí disponivel janeiro, fevereiro e março de 2022'
  },
  {
    id: 4,
    imovel: 'Casa com três dormitórios com uma suite',
    valorContato: 'Diaria de R$ 150,00 contato (51)998523145',  
    enderecoDisponibilidade: 'Av. Gravataí, 131, Imbé disponivel janeiro  de 2022'
  },
  {
    id: 5,
    imovel: 'Apt com dois dormitórios e com sacada',
    valorContato: 'Diaria de R$ 100,00 contato (51)973258745',  
    enderecoDisponibilidade: 'Av. Novo hamburgo, 552, disponivel janeiro e fevereiro de 2022'
  },
  {
    id: 6,
    imovel: 'Casa com dois dormitórios, com sacada, garagem para dois carros',
    valorContato: 'Diaria de R$ 120,00 contato (51)965852321',  
    enderecoDisponibilidade: 'Av. Assis Brasil, 2525, disponivel janeiro e fevereiro de 2022'
  },
  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/