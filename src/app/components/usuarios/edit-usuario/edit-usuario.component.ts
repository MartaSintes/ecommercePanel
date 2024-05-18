import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
declare var toastr: any;

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrl: './edit-usuario.component.css',
})
export class EditUsuarioComponent {
  public usuario: any = {};
  public btn_load = false;
  public id = '';
  public token: string | null = localStorage.getItem('token');

  constructor(
    private _route: ActivatedRoute,
    private _usuarioService: UsuarioService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.id = params['id'];
      this.init_data();
    });
  }

  init_data() {
    this._usuarioService
      .getUsuario(this.id, this.token)
      .subscribe((response) => {
        console.log(response);
        this.usuario = response;
      });
  }

  actualizar() {
    this.btn_load = true;
    this._usuarioService
      .updateUsuario(this.id, this.usuario, this.token)
      .subscribe(
        (response) => {
          console.log(response);
          this.btn_load = false;
          toastr.success('Usuario actualizado correctamente');
          this._router.navigate(['/colaborador']);
        },
        (error) => {
          console.error(error);
          this.btn_load = false;
          toastr.error('Error al actualizar el usuario');
        }
      );
  }

 
}
