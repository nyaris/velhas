import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


import { AppComponent } from './app.component';
import { TabuleiroComponent } from './tabuleiro/tabuleiro.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { IndicadorComponent } from './indicador/indicador.component';

@NgModule({
  declarations: [
    AppComponent,
    TabuleiroComponent,
    TopBarComponent,
    IndicadorComponent
  ],
  imports: [
    BrowserModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }