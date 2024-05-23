import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './GLOBAL';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  public url = GLOBAL.url;

  constructor(private _http: HttpClient) {}

  gettCliente(filtro: any, token: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 
    Authorization: token,
    });
    return this._http.get(this.url+'/gettCliente/' + filtro, {headers: headers});
  }
}
