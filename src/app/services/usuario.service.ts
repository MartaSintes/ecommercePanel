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
      headers: headers
    });
  }
  getUsuarios(token: any): Observable<any> {
    const headers = new HttpHeaders({ Authorization: token });
    return this._http.get(this.url + '/usuario', {
      headers: headers
    });
  }

  login(data: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + '/usuario/login', data, {
      headers: headers
    });
  }
}
