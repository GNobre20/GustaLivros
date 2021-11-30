import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dicionarios',
  templateUrl: './dicionarios.component.html',
  styleUrls: ['./dicionarios.component.css']
})
export class DicionariosComponent implements OnInit {
  livros:any = [
    {
      img:'assets/dicionarios/DICIONÁRIO ÁRABE - EDIPRO.png',
      produto: 'DICIONÁRIO ÁRABE',
      autor: 'EDIPRO'
    },
    {
      img:'assets/dicionarios/DICIONÁRIO COMPACTO DO DIREITO - SÉRGIO SÉRVULO.png',
      produto: 'DICIONÁRIO COMPACTO DO DIREITO',
      autor: 'SÉRGIO SÉRVULO'
    },
    {
      img:'assets/dicionarios/DICIONÁRIO DAS BULAS - MARY LOURDES.png',
      produto: 'DICIONÁRIO DAS BULAS',
      autor: 'MARY LOURDES'
    },
    {
      img:'assets/dicionarios/DICIONÁRIO DE EXPRESSÕES E TERMOS MILITARES - DEMÓSTENE MARINOTTO.png',
      produto: 'DICIONÁRIO DE EXPRESSÕES E TERMOS MILITARES',
      autor: 'DEMÓSTENE MARINOTTO'
    },
    {
      img:'assets/dicionarios/DICIONÁRIO DE SIMBOLOS - JEAN CHEVALIER.png',
      produto: 'DICIONÁRIO DE SIMBOLOS',
      autor: 'JEAN CHEVALIER'
    },
    {
      img:'assets/dicionarios/DICIONÁRIO HEBRAICO-PORTUGUÊS - SINCOVAL.png',
      produto: 'DICIONÁRIO HEBRAICO-PORTUGUÊS',
      autor: 'SINCOVAL'
    },
    {
      img:'assets/dicionarios/DICIONÁRIO JURÍDICO - MARIA CHAVES DE MELLO.png',
      produto: 'DICIONÁRIO JURÍDICO',
      autor: 'MARIA CHAVES DE MELLO'
    },
    {
      img:'assets/dicionarios/DICIONÁRIO LATIM ESSENCIAL - SANDRA BRAGA.png',
      produto: 'DICIONÁRIO LATIM ESSENCIAL',
      autor: 'SANDRA BRAGA'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
