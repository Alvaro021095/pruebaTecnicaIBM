import { formulario } from './formulario.interface';
import { tipoDocumento } from './tipoDocumento.interface';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ropa } from './ropa.interface';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class FormularioService {
	urlRopa = 'http://localhost:8081/api/fabrica/prendas/';
	urlTipoDocumentos = 'http://localhost:8081/api/fabrica/tipoDocumentos/';
	urlCrearPedido = 'http://localhost:8082/api/fabrica/pedido';
	constructor(private http: HttpClient) {}
	getRopa() {
		return this.http.get<ropa[]>(this.urlRopa);
	}
	getTipoDocumento() {
		return this.http.get<tipoDocumento[]>(this.urlTipoDocumentos);
	}
	hacerPedido(model: formulario) {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
		};
		this.http.post<formulario>(this.urlCrearPedido, model, httpOptions);
	}
}
