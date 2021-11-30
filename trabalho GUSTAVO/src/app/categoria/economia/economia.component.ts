import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-economia',
  templateUrl: './economia.component.html',
  styleUrls: ['./economia.component.css']
})
export class EconomiaComponent implements OnInit {
  livros:any = [
    {
      img:'assets/economia/AS 16 LEIS DO SUCESSO - NAPOLEON HILL.png',
      produto: 'AS 16 LEIS DO SUCESSO',
      autor: 'NAPOLEON HILL'
    },
    {
      img:'assets/economia/CRASH - ALEXANDRE VERSIGNASSI.png',
      produto: 'CRASH',
      autor: 'ALEXANDRE VERSIGNASSI'
    },
    {
      img:'assets/economia/DOMINANDO O CICLO DE MERCADO - HOWARD MARKS.png',
      produto: 'DOMINANDO O CICLO DE MERCADO',
      autor: 'HOWARD MARKS'
    },
    {
      img:'assets/economia/NOVAS CONFISSÕES DE UM ASSASSINO ECONÔMICO - JOHN PERKINS.png',
      produto: 'NOVAS CONFISSÕES DE UM ASSASSINO ECONÔMICO',
      autor: 'JOHN PERKINS'
    },
    {
      img:'assets/economia/O CAPITAL - KARL MARX.png',
      produto: 'O CAPITAL',
      autor: 'KARL MARX'
    },
    {
      img:'assets/economia/O LIVRO DA ECONOMIA - GLOBO LIVROS.png',
      produto: 'O LIVRO DA ECONOMIA',
      autor: 'GLOBO LIVROS'
    },
    {
      img:'assets/economia/OS 10 MANDAMENTO DA PROSPERIDADE - MARCOS SILVESTRE.png',
      produto: 'OS 10 MANDAMENTO DA PROSPERIDADE',
      autor: 'MARCOS SILVESTRE'
    },
    {
      img:'assets/economia/OS AXIOMAS DE ZURIQUE - MAX GUNTHER.png',
      produto: 'OS AXIOMAS DE ZURIQUE',
      autor: 'MAX GUNTHER'
    },
    {
      img:'assets/economia/RÁPIDO E DEVAGAR - DANIEL KAHNEMAN.png',
      produto: 'RÁPIDO E DEVAGAR',
      autor: 'DANIEL KAHNEMAN'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
