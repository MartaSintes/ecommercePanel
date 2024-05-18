import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { GLOBAL } from './GLOBAL';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  public url = GLOBAL.url;

  constructor(private _http: HttpClient) {}

  createUsuario(data: any, token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._http.post(this.url + '/usuario/create', data, {
      headers: headers,
    });
  }
  getUsuarios(token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._http.get(this.url + '/usuario', {
      headers: headers,
    });
  }

  getUsuario(id: any, token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._http.get(this.url + '/usuario/getUsuario/' + id, {
      headers: headers,
    });
  }

  updateUsuario(id: any, data: any, token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._http.put(this.url + '/usuario/updateUsuario/' + id, data, {
      headers: headers,
    });
  }

  deleteUsuario(id: any, token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._http.delete(this.url + '/usuario/deleteUsuario/' + id, {
      headers: headers,
    });
  }

  login(data: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + '/usuario/login', data, {
      headers: headers,
    });
  }
}
