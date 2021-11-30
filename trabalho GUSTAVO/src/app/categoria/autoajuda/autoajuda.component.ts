import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autoajuda',
  templateUrl: './autoajuda.component.html',
  styleUrls: ['./autoajuda.component.css']
})
export class AutoajudaComponent implements OnInit {
  livros:any = [
    {
      img:'assets/autoajuda/VOCÊ É INSUBSTITUÍVEL - AUGUSTO CURY.png',
      produto: 'VOCÊ É INSUBSTITUÍVEL',
      autor: 'AUGUSTO CURY'
    },
    {
      img:'assets/autoajuda/THE SECRET - RHONDA BYRNE.png',
      produto: 'THE SECRET',
      autor: 'RHONDA BYRNE'
    },
    {
      img:'assets/autoajuda/O PODER DO SUBCONSCIENTE - DR. JOSEPH MURPHY.png',
      produto: 'O PODER DO SUBCONSCIENTE',
      autor: 'DR. JOSEPH MURPHY'
    },
    {
      img:'assets/autoajuda/O MILAGRE DA MANHÃ - HAL ELROD.png',
      produto: 'O MILAGRE DA MANHÃ',
      autor: 'HAL ELROD'
    },
    {
      img:'assets/autoajuda/MAIS ESPERTO QUE O DIABO - NAPOLEON HILL.png',
      produto: 'MAIS ESPERTO QUE O DIABO',
      autor: 'NAPOLEON HILL'
    },
    {
      img:'assets/autoajuda/LIMITE ZERO - JOE VITALE.png',
      produto: 'LIMITE ZERO',
      autor: 'JOE VITALE'
    },    {
      img:'assets/autoajuda/GESTÃO DA EMOÇÃO - AUGUSTO CURY.png',
      produto: 'GESTÃO DA EMOÇÃO',
      autor: 'AUGUSTO CURY'
    },    {
      img:'assets/autoajuda/ESPECIALISTA EM PESSOAS - TIAGO BRUNET.png',
      produto: 'ESPECIALISTA EM PESSOAS',
      autor: 'TIAGO BRUNET'
    },    {
      img:'assets/autoajuda/COMO FAZER AMIGOS E INFLUENCIAR PESSOAS - DALE CARNEGIE.png',
      produto: 'COMO FAZER AMIGOS E INFLUENCIAR PESSOAS',
      autor: 'DALE CARNEGIE'
    },    {
      img:'assets/autoajuda/ATITUDE MENTAL POSITIVA - NAPOLEON HILL.png',
      produto: 'ATITUDE MENTAL POSITIVA',
      autor: 'NAPOLEON HILL'
    },    {
      img:'assets/autoajuda/AS 5 LINGUAGENS DO AMOR - GARY CHAMPMAN.png',
      produto: 'AS 5 LINGUAGENS DO AMOR',
      autor: 'GARY CHAMPMAN'
    },    {
      img:'assets/autoajuda/A ARTE DE SER MAIS PRODUTIVO - COLEÇÃO MENTE AFIADA.png',
      produto: 'A ARTE DE SER MAIS PRODUTIVO',
      autor: 'COLEÇÃO MENTE AFIADA'
    },    {
      img:'assets/autoajuda/12 REGRAS PARA A VIDA - JORDAN B. PETERSON.png',
      produto: '12 REGRAS PARA A VIDA',
      autor: 'JORDAN B. PETERSON'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
