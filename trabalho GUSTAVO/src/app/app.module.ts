import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './categoria/admin/admin.component';
import { ArtesComponent } from './categoria/artes/artes.component';
import { AutoajudaComponent } from './categoria/autoajuda/autoajuda.component';
import { ContabilidadeComponent } from './categoria/contabilidade/contabilidade.component';
import { GastronomiaComponent } from './categoria/gastronomia/gastronomia.component';
import { IdiomasComponent } from './categoria/idiomas/idiomas.component';
import { DicionariosComponent } from './categoria/dicionarios/dicionarios.component';
import { DireitoComponent } from './categoria/direito/direito.component';
import { EconomiaComponent } from './categoria/economia/economia.component';
import { EngenhariaComponent } from './categoria/engenharia/engenharia.component';
import { EsportesComponent } from './categoria/esportes/esportes.component';
import { MedicinaComponent } from './categoria/medicina/medicina.component';
import { TecnologiaComponent } from './categoria/tecnologia/tecnologia.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdminComponent,
    ArtesComponent,
    AutoajudaComponent,
    ContabilidadeComponent,
    GastronomiaComponent,
    IdiomasComponent,
    DicionariosComponent,
    DireitoComponent,
    EconomiaComponent,
    EngenhariaComponent,
    EsportesComponent,
    MedicinaComponent,
    TecnologiaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
