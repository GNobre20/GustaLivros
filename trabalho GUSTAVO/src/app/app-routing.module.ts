import { ContabilidadeComponent } from './categoria/contabilidade/contabilidade.component';
import { TecnologiaComponent } from './categoria/tecnologia/tecnologia.component';
import { MedicinaComponent } from './categoria/medicina/medicina.component';
import { IdiomasComponent } from './categoria/idiomas/idiomas.component';
import { GastronomiaComponent } from './categoria/gastronomia/gastronomia.component';
import { EsportesComponent } from './categoria/esportes/esportes.component';
import { EngenhariaComponent } from './categoria/engenharia/engenharia.component';
import { EconomiaComponent } from './categoria/economia/economia.component';
import { DireitoComponent } from './categoria/direito/direito.component';
import { DicionariosComponent } from './categoria/dicionarios/dicionarios.component';
import { AutoajudaComponent } from './categoria/autoajuda/autoajuda.component';
import { ArtesComponent } from './categoria/artes/artes.component';
import { AdminComponent } from './categoria/admin/admin.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'admin',  component: AdminComponent },
  {path: 'artes',  component: ArtesComponent },
  {path: 'autoajuda',  component: AutoajudaComponent },
  {path: 'contabilidade', component: ContabilidadeComponent},
  {path: 'dicionarios',  component: DicionariosComponent },
  {path: 'direito',  component: DireitoComponent },
  {path: 'economia',  component: EconomiaComponent },
  {path: 'engenharia',  component: EngenhariaComponent },
  {path: 'esportes',  component: EsportesComponent },
  {path: 'gastronomia',  component: GastronomiaComponent },
  {path: 'idiomas',  component: IdiomasComponent },
  {path: 'medicina',  component: MedicinaComponent },
  {path: 'tecnologia',  component: TecnologiaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
