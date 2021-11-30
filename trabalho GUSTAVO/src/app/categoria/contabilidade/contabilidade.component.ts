import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contabilidade',
  templateUrl: './contabilidade.component.html',
  styleUrls: ['./contabilidade.component.css']
})
export class ContabilidadeComponent implements OnInit {
  livros:any = [
    {
      img:'assets/contabilidade/CONTABILIDADE COMERCIAL - SÉRIE EM FOCO.png',
      produto: 'CONTABILIDADE COMERCIAL',
      autor: 'SÉRIE EM FOCO'
    },
    {
      img:'assets/contabilidade/CONTABILIDADE FISCAL E TRIBUTÁRIA - SILVIO CREPALDI.png',
      produto: 'CONTABILIDADE FISCAL E TRIBUTÁRIA',
      autor: 'SILVIO CREPALDI'
    },
    {
      img:'assets/contabilidade/CONTABILIDADE GERAL - OSNI MOURA RIBEIRO.png',
      produto: 'CONTABILIDADE GERAL',
      autor: 'OSNI MOURA RIBEIRO'
    },
    {
      img:'assets/contabilidade/CONTABILIDADE PUBLICA - INALDO ARAÚJO  DANIEL ARRUDA.png',
      produto: 'CONTABILIDADE PUBLICA',
      autor: 'INALDO ARAÚJO, DANIEL ARRUDA'
    },
    {
      img:'assets/contabilidade/ÉTICA NA CONTABILIDADE - OSNI MOURA RIBEIRO.png',
      produto: 'ÉTICA NA CONTABILIDADE',
      autor: 'OSNI MOURA RIBEIRO'
    },
    {
      img:'assets/contabilidade/GESTÃO EFICAZ DE PROJETOS - ROBERT K. WYSOCKI.png',
      produto: 'GESTÃO EFICAZ DE PROJETOS',
      autor: 'ROBERT K. WYSOCKI'
    },
    {
      img:'assets/contabilidade/TEORIA DA CONTABILIDADE - MARCELO CAVALCANTI.png',
      produto: 'TEORIA DA CONTABILIDADE',
      autor: 'MARCELO CAVALCANTI'
    },
    {
      img:'assets/contabilidade/CONTABILIDADE AVANÇADA - PAULO VICECONTI.png',
      produto: 'CONTABILIDADE AVANÇADA',
      autor: 'PAULO VICECONTI'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
