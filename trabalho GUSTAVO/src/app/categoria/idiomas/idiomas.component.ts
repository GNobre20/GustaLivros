import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {
  livros:any = [
    {
      img:'assets/idiomas/CAP SUR - ADELAIDE TILLY.png',
      produto: 'CAP SUR',
      autor: 'ADELAIDE TILLY'
    },    {
      img:'assets/idiomas/COMPACT - CAMBRIDGE.png',
      produto: 'COMPACT',
      autor: 'CAMBRIDGE'
    },
    {
      img:'assets/idiomas/DIE DEUTSCHPROFIS A1 - JANE CADWALLADER.png',
      produto: 'DIE DEUTSCHPROFIS A1',
      autor: 'JANE CADWALLADER'
    },    {
      img:'assets/idiomas/APRENDA INGLES - VIRGINIA KLIE.png',
      produto: 'APRENDA INGLES',
      autor: 'VIRGINIA KLIE'
    },
    {
      img:'assets/idiomas/ESPAÑOL PARA JÓVENES BRASILEIROS - SORAIA OSMAN.png',
      produto: 'ESPAÑOL PARA JÓVENES BRASILEIROS',
      autor: 'SORAIA OSMAN'
    },    {
      img:'assets/idiomas/HAPPY CAMPERS - MACMILAN ELT.png',
      produto: 'HAPPY CAMPERS',
      autor: 'MACMILAN ELT'
    },
    {
      img:'assets/idiomas/JOB QUIZ - MARGARET MacDONALD.png',
      produto: 'JOB QUIZ',
      autor: 'MARGARET MacDONALD'
    },    {
      img:'assets/idiomas/METRO TEACHERS PACK - JAMES STYRING.png',
      produto: 'METRO TEACHERS PACK',
      autor: 'JAMES STYRING'
    },
    {
      img:'assets/idiomas/THE LIFE CYCLE OF A FROG - TRACEY MICHELE.png',
      produto: 'THE LIFE CYCLE OF A FROG',
      autor: 'TRACEY MICHELE'
    },    {
      img:'assets/idiomas/TRAVEL STORIES - GRAHAM GREENE.png',
      produto: 'TRAVEL STORIES',
      autor: 'GRAHAM GREENE'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
