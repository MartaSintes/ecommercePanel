import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from "@angular/common/http";
import { Observable } from 'rxjs';
import { GLOBAL } from './GLOBAL';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  public url = GLOBAL.url;

  constructor(private _http: HttpClient) {}

  createProducto(data: any, token: any): Observable<any> {
    const headers = new HttpHeaders({ Authorization: token });
    const fd = new FormData();
    fd.append('titulo', data.titulo);
    fd.append('descripcion', data.descripcion);
    if (data.galeria.length >= 1) {
      fd.append('galeria', JSON.stringify(data.galeria));
      data.galeria.forEach((element: any) => {
        fd.append('files[]', element.imagen);
      });
    }
    console.log('Headers:', headers);
    return this._http.post(this.url + '/createProducto', fd, {
      headers: headers,
    });
  }

  getProductos(filtro: any, token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._http.get(this.url + '/getProductos/' + filtro, {
      headers: headers,
    });
  }
  setStateProducto(id: any, data: any, token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._http.put(this.url + '/setState/' + id, data, {
      headers: headers,
    });
  }
  getProducto(id: any, token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._http.get(this.url + '/getProducto/' + id, {
      headers: headers,
    });
  }
  getGaleriaProducto(id: any, token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._http.get(this.url + '/getGaleriaProducto/' + id, {
      headers: headers,
    });
  }
  updateProducto(id: any, data: any, token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._http.put(this.url + '/updateProducto/' + id, data, {
      headers: headers,
    });
  }

  uploadImgProducto(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({ Authorization: token });
    const fd = new FormData();
    fd.append('titulo', data.titulo);
    fd.append('imagen', data.imagen);
    fd.append('producto', data.producto);
    return this._http.post(this.url + '/uploadImgProducto', fd, {
      headers: headers,
    });
  }
  deleteImgProducto(id: any, token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._http.delete(this.url + '/deleteImgProducto/' + id, {
      headers: headers,
    });
  }

  deleteProducto(id: any, token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._http.delete(this.url + '/deleteProducto/' + id, {
      headers: headers,
    });
  }
}