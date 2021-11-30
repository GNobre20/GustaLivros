import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engenharia',
  templateUrl: './engenharia.component.html',
  styleUrls: ['./engenharia.component.css']
})
export class EngenhariaComponent implements OnInit {
  livros:any = [
    {
      img:'assets/engenharia/CIÊNCIA E ENGENHARIA DE MATERIAIS - WILLIAM D. CALLISTER.png',
      produto: 'CIÊNCIA E ENGENHARIA DE MATERIAIS',
      autor: 'WILLIAM D. CALLISTER'
    },
    {
      img:'assets/engenharia/ENGENHARIA DE PRODUÇÃO - DAYSE MENDES.png',
      produto: 'ENGENHARIA DE PRODUÇÃO',
      autor: 'DAYSE MENDES'
    },
    {
      img:'assets/engenharia/ENGENHARIA DE TRÁFEGO - BRUNA MARCELLI.png',
      produto: 'ENGENHARIA DE TRÁFEGO',
      autor: 'BRUNA MARCELLI'
    },
    {
      img:'assets/engenharia/MANUAL DE INSTALAÇÕES HIDRÁULICAS E SANITÁRIAS - CARLOS ALEXANDRE.png',
      produto: 'MANUAL DE INSTALAÇÕES HIDRÁULICAS E SANITÁRIAS',
      autor: 'CARLOS ALEXANDRE'
    },
    {
      img:'assets/engenharia/MECÂNICA DOS MATERIAIS - JOHNSTON BEER.png',
      produto: 'MECÂNICA DOS MATERIAIS',
      autor: 'JOHNSTON BEER'
    },
    {
      img:'assets/engenharia/PLANEJAMENTO E CONTROLE DA PRODUÇÃO - MAURÍCIO MEREIRA.png',
      produto: 'PLANEJAMENTO E CONTROLE DA PRODUÇÃO',
      autor: 'MAURÍCIO MEREIRA'
    },
    {
      img:'assets/engenharia/PRINCÍPIOS EM SISTEMAS E CONTROLES - CARLOS A. G. PEGOLLO.png',
      produto: 'PRINCÍPIOS EM SISTEMAS E CONTROLES',
      autor: 'CARLOS A. G. PEGOLLO'
    },
    {
      img:'assets/engenharia/PROJETOS E FONTES DE FINANCIAMENTO - CLAUDIONOR AGIBERT.png',
      produto: 'PROJETOS E FONTES DE FINANCIAMENTO',
      autor: 'CLAUDIONOR AGIBERT'
    },
    {
      img:'assets/engenharia/TOPOGRAFIA - JOÃO DALTON.png',
      produto: 'TOPOGRAFIA',
      autor: 'JOÃO DALTON'
    },
    {
      img:'assets/engenharia/TRANSPORTE PÚBLICO - LUZIANE MACHADO.png',
      produto: 'TRANSPORTE PÚBLICO',
      autor: 'LUZIANE MACHADO'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
