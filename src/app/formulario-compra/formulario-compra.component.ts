import { ValorTotal } from './valorTotal.model';
import { FormularioService } from './formulario.service';
import { tipoDocumento } from './tipoDocumento.interface';
import { Formulario } from './formulario.model';
import { ropa } from './ropa.interface';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-formulario-compra',
	templateUrl: './formulario-compra.component.html',
	styles: []
})
export class FormularioCompraComponent implements OnInit {
	ropa$: Observable<ropa[]>;
	tipoDocumento$: Observable<tipoDocumento[]>;

	valor: ValorTotal;
	valorAPagar: number;
	model: Formulario;
	contador: number;

	tipoRopaSelect: number;
	tipoDocumentoSelect: number;

	constructor(private formularioService: FormularioService) {
		this.ropa$ = formularioService.getRopa();
		this.tipoDocumento$ = formularioService.getTipoDocumento();
		this.tipoRopaSelect = 0;
		this.tipoDocumentoSelect = 0;
		this.model = new Formulario('', 0, '', 0, 0, '', '');
		this.valor = new ValorTotal(0, 0, 0);
		this.valorAPagar = 0;
		this.contador = 5;
	}
	hacerPedido(
		nombrePersona: string,
		numeroIndentificacion: string,
		cantidadProductos: number,
		fechaEntrega: string,
		direccion: string
	) {
		this.model = new Formulario(
			nombrePersona,
			this.tipoDocumentoSelect,
			numeroIndentificacion,
			this.tipoRopaSelect,
			cantidadProductos,
			fechaEntrega,
			direccion
		);
		this.valor = this.formularioService.hacerPedido(this.model);

		this.valorAPagar = this.valorAPagar + this.valor.total;
		this.contador--;
		alert('Puedes hacer ' + this.contador + ' pedidos mas.');
	}
	ngOnInit() {}
}
