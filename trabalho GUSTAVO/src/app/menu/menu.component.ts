import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  categorias:any = [
    {
      nome:'Administração',
      rota:'admin'
    },
    {
      nome:'Artes',
      rota:'artes'
    },
    {
      nome:'Auto Ajuda',
      rota:'autoajuda'
    },
    {
      nome:'Contabilidade',
      rota:'contabilidade'
    },
    {
      nome:'Gastronomia',
      rota:'gastronomia'
    },
    {
      nome:'Idiomas',
      rota:'idiomas'
    },
    {
      nome:'Dicionários',
      rota:'dicionarios'
    },
    {
      nome:'Direito',
      rota:'direito'
    },
    {
      nome:'Economia',
      rota:'economia'
    },
    {
      nome:'Engenharia',
      rota:'engenharia'
    },
    {
      nome:'Esportes',
      rota:'esportes'
    },
    {
      nome:'Medicina',
      rota:'medicina'
    },
    {
      nome:'Tecnologia',
      rota:'tecnologia'
    },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
