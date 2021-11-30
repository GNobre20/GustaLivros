import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicina',
  templateUrl: './medicina.component.html',
  styleUrls: ['./medicina.component.css']
})
export class MedicinaComponent implements OnInit {
  livros:any = [
    {
      img:'assets/medicina/COMER PARA NÃO MORRER - MICHAEL GREGER.png',
      produto: 'COMER PARA NÃO MORRER',
      autor: 'MICHAEL GREGER'
    },
    {
      img:'assets/medicina/MEDICINA DO FUTURO NO PRESENTE - DR. ÍTALO RACHID.png',
      produto: 'MEDICINA DO FUTURO NO PRESENTE',
      autor: 'DR. ÍTALO RACHID'
    },
    {
      img:'assets/medicina/O CÉREBRO QUE SE TRANSFORMA - NORMAN DOIDGE.png',
      produto: 'O CÉREBRO QUE SE TRANSFORMA',
      autor: 'NORMAN DOIDGE'
    },
    {
      img:'assets/medicina/SAÚDE ALÉM DO TEMPO - DR GABRIEL ALMEIDA.png',
      produto: 'SAÚDE ALÉM DO TEMPO',
      autor: 'DR GABRIEL ALMEIDA'
    },
    {
      img:'assets/medicina/VIRE A CHAVE - JAMES CLEMENT.png',
      produto: 'VIRE A CHAVE',
      autor: 'JAMES CLEMENT'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
