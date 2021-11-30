import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direito',
  templateUrl: './direito.component.html',
  styleUrls: ['./direito.component.css']
})
export class DireitoComponent implements OnInit {
  livros:any = [
    {
      img:'assets/direito/CÓDIGO CIVIL - EDITORA SARAIVA.png',
      produto: 'CÓDIGO CIVIL',
      autor:'EDITORA SARAIVA'
    },
    {
      img:'assets/direito/CÓDIGO DE PROCESSO CIVIL - EDITORA SARAIVA.png',
      produto: 'CÓDIGO DE PROCESSO CIVIL',
      autor:'EDITORA SARAIVA'
    },
    {
      img:'assets/direito/CÓDIGO DE PROTEÇÃO E DEFESA DO CONSUMIDOR - EDITORA SARAIVA.png',
      produto: 'CÓDIGO DE PROTEÇÃO E DEFESA DO CONSUMIDOR',
      autor:'EDITORA SARAIVA'
    },
    {
      img:'assets/direito/CÓDIGO PENAL COMENTADO - CEZAR ROBERTO BITENCOURT.png',
      produto: 'CÓDIGO PENAL COMENTADO',
      autor:'CEZAR ROBERTO BITENCOURT'
    },
    {
      img:'assets/direito/DIREITO CIVIL BRASILEIRA - MARIA HELENA DINIZ.png',
      produto: 'DIREITO CIVIL BRASILEIRA',
      autor:'MARIA HELENA DINIZ'
    },
    {
      img:'assets/direito/DIREITO CIVIL BRASILEIRO - EDITORA SARAIVA.png',
      produto: 'DIREITO CIVIL BRASILEIRO',
      autor:'EDITORA SARAIVA'
    },
    {
      img:'assets/direito/DIREITO PROCESSUAL CIVIL - MARCUS VINICIUS RIOS.png',
      produto: 'DIREITO PROCESSUAL CIVIL',
      autor:'MARCUS VINICIUS RIOS'
    },
    {
      img:'assets/direito/DIREITO TRIBUTÁRIO - FÁBIO PERIANDRO.png',
      produto: 'DIREITO TRIBUTÁRIO',
      autor:'FÁBIO PERIANDRO'
    },
    {
      img:'assets/direito/LIÇÕES PRELIMINARES DE DIREITO - MIGUEL REALE.png',
      produto: 'LIÇÕES PRELIMINARES DE DIREITO',
      autor:'MIGUEL REALE'
    },
    {
      img:'assets/direito/O CASO DOS EXPLORADORES DE CAVERNA - LON L. FULLER.png',
      produto: 'O CASO DOS EXPLORADORES DE CAVERNA',
      autor:'LON L. FULLER'
    },
    {
      img:'assets/direito/VADE MECUM SARAIVA - EDITORA SARAIVA.png',
      produto: 'VADE MECUM SARAIVA',
      autor:'EDITORA SARAIVA'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
