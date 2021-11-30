import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {
  livros:any = [
    {
      img:'assets/tecnologia/ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES - LINDA NULL.png',
      produto: 'ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES',
      autor: 'LINDA NULL'
    },
    {
      img:'assets/tecnologia/CIÊNCIA DA COMPUTAÇÃO - NELL DALE.png',
      produto: 'CIÊNCIA DA COMPUTAÇÃO',
      autor: 'NELL DALE'
    },
    {
      img:'assets/tecnologia/ENGENHARIA DE SOFTWARE - ROGER S. PRESSMAN.png',
      produto: 'ENGENHARIA DE SOFTWARE',
      autor: 'ROGER S. PRESSMAN'
    },
    {
      img:'assets/tecnologia/SEGURANÇA DIGITAL - JOSELI MARISE BENINE.png',
      produto: 'SEGURANÇA DIGITAL',
      autor: 'JOSELI MARISE BENINE'
    },
    {
      img:'assets/tecnologia/CLEAN CODE - ROBERT C. MARTIN.png',
      produto: 'CLEAN CODE',
      autor: 'ROBERT C. MARTIN'
    },
    {
      img:'assets/tecnologia/THE CLEAN CODER - ROBERT C. MARTIN.png',
      produto: 'THE CLEAN CODER',
      autor: 'ROBERT C. MARTIN'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
