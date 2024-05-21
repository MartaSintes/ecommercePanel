import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
declare var toastr: any;


@Component({
  selector: 'app-index-usuario',
  templateUrl: './index-usuario.component.html',
  styleUrl: './index-usuario.component.css',
})
export class IndexUsuarioComponent implements OnInit {
  public usuarios: any[] = [];
  public token: string | null = localStorage.getItem('token');
  public page = 1;
  public pageSize = 2;


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

  borrarUsuario(id: string): void {
    
     this._usuarioService.deleteUsuario(id, this.token).subscribe(
       (response) => {
         toastr.success('Usuario eliminado correctamente');
         this.initData(); // Actualizar la lista de usuarios
         
       },
       (error) => {
         toastr.error('Error al eliminar el usuario');
        
       }
     );
  }
}
