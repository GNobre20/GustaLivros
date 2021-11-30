import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  livros:any = [
    {
      img:'assets/adimin/A Arte da Guerra - SUN TZU.png',
      produto: 'A Arte da Guerra',
      autor: 'SUN TZU'
    },  
    {
      img:'assets/adimin/A Disciplinada Busca por Menos - GREG McKEOWN.png',
      produto: 'A Disciplinada Busca por Menos',
      autor: 'GREG McKEOWN'
    },  
    {
      img:'assets/adimin/ANTI-FRÁGIL - NASSIM NICHOLAS TALEB.png',
      produto: 'ANTI-FRÁGIL',
      autor: 'NASSIM NICHOLAS TALEB'
    },  
    {
      img:'assets/adimin/Fora de Série - MALCOLM GLADWELL.png',
      produto: 'Fora de Série',
      autor: 'MALCOLM GLADWELL'
    },  
    {
      img:'assets/adimin/O jeito Disney de Encantar os Clientes - MICHAEL D. EISNER.png',
      produto: 'O jeito Disney de Encantar os Clientes',
      autor: 'MICHAEL D. EISNER'
    },  
    {
      img:'assets/adimin/O Jeito HARVARD de ser Feliz - SHAWN ACHOR.png',
      produto: 'O Jeito HARVARD de ser Feliz',
      autor: 'SHAWN ACHOR'
    },  
    {
      img:'assets/adimin/O poder da autorresponsabilidade - PAULO VIEIRA.png',
      produto: 'O poder da autorresponsabilidade',
      autor: 'PAULO VIEIRA'
    },  
    {
      img:'assets/adimin/O poder do Hábito - CHARLES DUHIGG.png',
      produto: 'O poder do Hábito',
      autor: 'CHARLES DUHIGG'
    },  
    {
      img:'assets/adimin/Os 7 Hábitos das Pessoas Altamente Eficazes - STEPHEN R. COVEY.png',
      produto: 'Os 7 Hábitos das Pessoas Altamente Eficazes',
      autor: 'STEPHEN R. COVEY'
    },  
    {
      img:'assets/adimin/Os Segredos da Mente Milionária - T. HARV EKER.png',
      produto: 'Os Segredos da Mente Milionária',
      autor: 'T. HARV EKER'
    },    
    {
      img:'assets/adimin/Quem pensa enriquece O LEGADO - NAPOLEON HILL.png',
      produto: 'Quem pensa enriquece "O LEGADO"',
      autor: 'NAPOLEON HILL'
    },  
    {
      img:'assets/adimin/Trabalhe 4 horas por Semana - TIMOTHY FERRISS.png',
      produto: 'Trabalhe 4 horas por Semana',
      autor: 'TIMOTHY FERRISS'
    },  

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
