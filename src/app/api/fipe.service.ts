import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FipeService {

  baseUrl = 'https://parallelum.com.br/fipe/api/v1';

  constructor(private http: HttpClient) { }

  // CARROS
  MarcasCarro() {
    return this.http.get(`${this.baseUrl}/carros/marcas`);
  }
  ModelosCarro(marca: any) {
    return this.http.get(`${this.baseUrl}/carros/marcas/${marca}/modelos`);
  }
  AnosCarro(marca: any, modelo: any) {
    return this.http.get(`${this.baseUrl}/carros/marcas/${marca}/modelos/${modelo}/anos`);
  }
  ValorCarro(marca: any, modelo: any, ano: any) {
    return this.http.get(`${this.baseUrl}/carros/marcas/${marca}/modelos/${modelo}/anos/${ano}`);
  }
  // MOTOS
  MarcasMoto() {
    return this.http.get(`${this.baseUrl}/motos/marcas`);
  }
  ModelosMoto(marca: any) {
    return this.http.get(`${this.baseUrl}/motos/marcas/${marca}/modelos`);
  }
  AnosMoto(marca: any, modelo: any) {
    return this.http.get(`${this.baseUrl}/motos/marcas/${marca}/modelos/${modelo}/anos`);
  }
  ValorMoto(marca: any, modelo: any, ano: any) {
    return this.http.get(`${this.baseUrl}/motos/marcas/${marca}/modelos/${modelo}/anos/${ano}`);
  }
  // CAMINHÕES
  MarcasCaminhoes() {
    return this.http.get(`${this.baseUrl}/caminhoes/marcas`);
  }
  ModelosCaminhoes(marca: any) {
    return this.http.get(`${this.baseUrl}/caminhoes/marcas/${marca}/modelos`);
  }
  AnosCaminhoes(marca: any, modelo: any) {
    return this.http.get(`${this.baseUrl}/caminhoes/marcas/${marca}/modelos/${modelo}/anos`);
  }
  ValorCaminhoes(marca: any, modelo: any, ano: any) {
    return this.http.get(`${this.baseUrl}/caminhoes/marcas/${marca}/modelos/${modelo}/anos/${ano}`);
  }
}
