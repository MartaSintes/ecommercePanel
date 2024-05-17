import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';


@Component({
  selector: 'app-index-usuario',
  templateUrl: './index-usuario.component.html',
  styleUrl: './index-usuario.component.css',
})
export class IndexUsuarioComponent implements OnInit {
  public usuarios: any[] = [];
  public token: string | null = localStorage.getItem('token');

  constructor(private _usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.initData();
  }
  initData(): void {
    if (this.token) {
      this._usuarioService.getUsuarios(this.token).subscribe(
        (response) => {
          this.usuarios = response;
        },
        (error) => {
          console.error('Error al obtener usuarios:', error);
        }
      );
    } else {
      console.error('Token no encontrado');
    }
  }
}
