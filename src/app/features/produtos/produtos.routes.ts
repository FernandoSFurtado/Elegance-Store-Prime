import { Routes } from '@angular/router';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { ProdutosDetalhesComponent } from './produtos-detalhes/produtos-detalhes.component';

export const PRODUTOS_ROUTES: Routes = [
  {
    path: '',
    component: ProdutosListaComponent,
    title: 'Produtos'
  },
  {
    path: ':id',
    component: ProdutosDetalhesComponent,
    title: 'Detalhes do Produto'
  }
];
