import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientesService } from './services/clientes.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorInterceptorProvider } from './services/interceptor-error';


@NgModule({
  declarations: [
    AppComponent,
    CadastroClientesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ClientesService,ErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
