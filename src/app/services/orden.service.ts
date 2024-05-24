import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './GLOBAL';

@Injectable({
  providedIn: 'root',
})
export class OrdenService {
  public url = GLOBAL.url;

  constructor(private _http: HttpClient) {}

  getOrdenes(token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._http.get(this.url + '/findOrdenes', {
      headers: headers,
    });
  }

  getOrden(id: any, token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._http.get(this.url + '/orden/getOrden/' + id, {
      headers: headers,
    });
  }
}
