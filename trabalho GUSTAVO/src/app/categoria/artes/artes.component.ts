import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artes',
  templateUrl: './artes.component.html',
  styleUrls: ['./artes.component.css']
})
export class ArtesComponent implements OnInit {
  livros:any = [
    {
      img:'assets/artes/A Construção da Personagem - CONSTANTIN STANISLAVSKI.png',
      produto: 'Trabalhe 4 horas por Semana',
      autor: 'TIMOTHY FERRISS'
    },
    {
      img:'assets/artes/Arte Moderna - GIULIO CARLO ARGAN.png',
      produto: 'Arte Moderna',
      autor: 'GIULIO CARLO ARGAN'
    },
    {
      img:'assets/artes/Fotógrafos Sobre a Fotografia - HENRY CARROLL.png',
      produto: 'Fotógrafos Sobre a Fotografia',
      autor: 'HENRY CARROLL'
    },
    {
      img:'assets/artes/Hamlet - WILLIAM SHAKESPEARE.png',
      produto: 'Hamlet',
      autor: 'WILLIAM SHAKESPEARE'
    },
    {
      img:'assets/artes/Moda com Propósito - ANDRÉ CARVALHAL.png',
      produto: 'Moda com Propósito',
      autor: 'ANDRÉ CARVALHAL'
    },
    {
      img:'assets/artes/O Livro da Arte - GloboLivros.png',
      produto: 'O Livro da Arte',
      autor: 'GloboLivros'
    },
    {
      img:'assets/artes/Partido-alto Samba de bamba - NEI LOPES.png',
      produto: 'Partido-alto Samba de bamba',
      autor: 'NEI LOPES'
    },
    {
      img:'assets/artes/Romeu e Julieta - WILLIAM SHAKESPEARE.png',
      produto: 'Romeu e Julieta',
      autor: 'WILLIAM SHAKESPEARE'
    },
    {
      img:'assets/artes/Sobrevivendo no Inferno - RACIONAIS MCs.png',
      produto: 'Sobrevivendo no Inferno',
      autor: 'RACIONAIS MCs'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
