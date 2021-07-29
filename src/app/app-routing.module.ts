import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { ExplorarComponent } from './explorar/explorar.component';
import { LayoutFeedComponent } from './layout-feed/layout-feed.component';
import { PerfilComponent } from './perfil/perfil.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';



const routes: Routes = [
  {path: '', redirectTo: 'layout-feed', pathMatch: 'full'}, // página inicial: caminho vazio = aba entrar! - pathMatch = compatibilidade total.
  {path: 'entrar', component: EntrarComponent}, // path da página entrar. Atentar-se a não colocar / antes do caminho.
  {path: 'cadastrar', component: CadastrarComponent}, // path da página cadastrar. Atentar-se a não colocar / antes do caminho.
  {path: 'explorar', component: ExplorarComponent}, // path da página explorar.
  {path: 'quemsomos', component: QuemsomosComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'layout-feed', component: LayoutFeedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
