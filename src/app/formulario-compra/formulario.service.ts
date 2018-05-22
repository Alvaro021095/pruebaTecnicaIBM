import { ValorTotal } from './valorTotal.model';
import { Formulario } from './formulario.model';
import { formulario } from './formulario.interface';
import { tipoDocumento } from './tipoDocumento.interface';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { ropa } from './ropa.interface';
import { RequestOptions, Headers, Response, Http } from '@angular/http';

@Injectable()
export class FormularioService {
	urlRopa = 'http://localhost:8081/api/fabrica/prendas/';
	urlTipoDocumentos = 'http://localhost:8081/api/fabrica/tipoDocumentos/';
	urlCrearPedido = 'http://localhost:8082/api/fabrica/pedido/crearPedido';

	valorTotal: ValorTotal;

	constructor(private http: HttpClient, private http2: Http) {
		this.valorTotal = new ValorTotal(0, 0, 0);
	}
	getRopa() {
		return this.http.get<ropa[]>(this.urlRopa);
	}
	getTipoDocumento() {
		return this.http.get<tipoDocumento[]>(this.urlTipoDocumentos);
	}
	hacerPedido(model: formulario) {
		console.log('Ingresando a hacer el pedido : ' + JSON.stringify(model));

		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
		};

		console.log('se crearon los httpOptions: ' + JSON.stringify(httpOptions));

		this.http.post(this.urlCrearPedido, model, httpOptions).subscribe(
			(val) => {
				console.log('POST call successful value returned in body', val);
				this.valorTotal = JSON.parse(JSON.stringify(val));
				alert(
					'Su pedido fue hecho con exito, su valor a pagar sera de: ' +
						this.valorTotal.total
				);
				return this.valorTotal;
			},
			(response) => {
				console.log('POST call in error', response);
			},
			() => {
				console.log('The POST observable is now completed.');
			}
		);

		return this.valorTotal;
	}
}
