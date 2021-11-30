import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esportes',
  templateUrl: './esportes.component.html',
  styleUrls: ['./esportes.component.css']
})
export class EsportesComponent implements OnInit {
  livros:any = [
    {
      img:'assets/esportes/BASQUETE METODOLOGIA DO ENSINO - RUL SOUZA.png',
      produto: 'BASQUETE METODOLOGIA DO ENSINO',
      autor: 'RUL SOUZA'
    },
    {
      img:'assets/esportes/CARROS DOS SONHOS AMERICANOS -EDITORA EUROPA.png',
      produto: 'CARROS DOS SONHOS AMERICANOS',
      autor: 'EDITORA EUROPA'
    },
    {
      img:'assets/esportes/CARROS DOS SONHOS JAPONESES -EDITORA EUROPA.png',
      produto: 'CARROS DOS SONHOS JAPONESES',
      autor: 'EDITORA EUROPA'
    },
    {
      img:'assets/esportes/COPA LIBERTADORES - ROGER LUIZ BRINKMANN.png',
      produto: 'COPA LIBERTADORES',
      autor: 'ROGER LUIZ BRINKMANN'
    },
    {
      img:'assets/esportes/GINÁSTICA RÍTMICA - ARTEMIS SOARES.png',
      produto: 'GINÁSTICA RÍTMICA',
      autor: 'ARTEMIS SOARES'
    },
    {
      img:'assets/esportes/HISTÓRIA, CONCEITOS E FUTEBOL - RICARDO PINTO.png',
      produto: 'HISTÓRIA, CONCEITOS E FUTEBOL',
      autor: 'RICARDO PINTO'
    },
    {
      img:'assets/esportes/KARATÊ BRASILEIRO - JORGE H. MAGALHÃES .png',
      produto: 'KARATÊ BRASILEIRO',
      autor: 'JORGE H. MAGALHÃES '
    },
    {
      img:'assets/esportes/O QUE É BASQUETE - ARMANDO FREITAS.png',
      produto: 'O QUE É BASQUETE',
      autor: 'ARMANDO FREITAS'
    },
    {
      img:'assets/esportes/PUNHO CERRADO - PHILIPE VAN R. LIMA.png',
      produto: 'PUNHO CERRADO',
      autor: 'PHILIPE VAN R. LIMA'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
