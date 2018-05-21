import { FormularioService } from './formulario-compra/formulario.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { app_routing } from './app.router';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormularioCompraComponent } from './formulario-compra/formulario-compra.component';
import { PrincipalComponent } from './principal/principal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [ AppComponent, FormularioCompraComponent, PrincipalComponent ],
	imports: [ BrowserModule, app_routing, HttpClientModule, FormsModule ],
	providers: [ FormularioService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
