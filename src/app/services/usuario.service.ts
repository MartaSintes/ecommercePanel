import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private _http : HttpClient
  ) {}

  createUsuario(data:any):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post('http://127.0.0.1:3000/usuario/create', data,{headers: headers})

  }
}
