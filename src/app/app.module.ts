import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PortadorComponent } from './portador/portador.component';
import { CartaoComponent } from './cartao/cartao.component';
import { LancamentoComponent } from './lancamento/lancamento.component';
import { FaturaComponent } from './fatura/fatura.component';
import {Router, RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './notfound/not-found.component';
import { EmptyComponent } from './empty/empty.component';
import { FormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const appRoutes :Routes=[
  {
    path: 'portador',
  component:PortadorComponent
  },
  {
    path: 'cartao',
    component:CartaoComponent
  },
  {
    path: 'lancamento',
    component: LancamentoComponent
  },
  {
    path: 'fatura',
    component: FaturaComponent
  },
  {
    path: '',
    component: EmptyComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PortadorComponent,
    CartaoComponent,
    LancamentoComponent,
    FaturaComponent,
    NotFoundComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
