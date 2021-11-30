import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gastronomia',
  templateUrl: './gastronomia.component.html',
  styleUrls: ['./gastronomia.component.css']
})
export class GastronomiaComponent implements OnInit {
  livros:any = [
    {
      img:'assets/gastronomia/ALIMENTAÇÃO INFANTIL - COLEÇÃO VIDA E EQUILÍBRIO.png',
      produto: 'ALIMENTAÇÃO INFANTIL',
      autor: 'COLEÇÃO VIDA E EQUILÍBRIO'
    },
    {
      img:'assets/gastronomia/BOLOS CASEIROS - COLEÇÃO SABOR A MESA.png',
      produto: 'BOLOS CASEIROS',
      autor: 'COLEÇÃO SABOR A MESA'
    },
    {
      img:'assets/gastronomia/CONFEITARIA FÁCIL - COLEÇÃO SABOR A MESA.png',
      produto: 'CONFEITARIA FÁCIL',
      autor: 'COLEÇÃO SABOR A MESA'
    },
    {
      img:'assets/gastronomia/EU NÃO CONSIGO EMAGRECER - DR. PIERRE DUKAN.png',
      produto: 'EU NÃO CONSIGO EMAGRECER',
      autor: 'DR. PIERRE DUKAN'
    },
    {
      img:'assets/gastronomia/PRÓPOLIS - WALTER BRETZ.png',
      produto: 'PRÓPOLIS',
      autor: 'WALTER BRETZ'
    },
    {
      img:'assets/gastronomia/TEMPERO DE FAMILIA - RODRIGO HILBERT.png',
      produto: 'TEMPERO DE FAMILIA',
      autor: 'RODRIGO HILBERT'
    },
    {
      img:'assets/gastronomia/WINE POLLY - MADELINE PUCKETTE.png',
      produto: 'WINE POLLY',
      autor: 'MADELINE PUCKETTE'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
