import { Component } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
declare var toastr:any;

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css']
})
export class CreateUsuarioComponent {
  public usuario : any = {
    rol: ''
  };

  constructor(
    private _usuarioService : UsuarioService
  ){}

  ngOnInit(){}

  registrar(){
    
    if(!this.usuario.nombres){
      toastr.error("El nombre es requerido.");
    }else if(!this.usuario.apellidos){
      toastr.error("Los apellidos son requeridos.");
    }else if(!this.usuario.email){
      toastr.error("El correo es requerido.");
    }else if(!this.usuario.rol){
      toastr.error("El rol es requerido.");
    }else{
      this._usuarioService.createUsuario(this.usuario).subscribe(
        response=>{
          console.log(response);
          
        },
        error=>{
          console.log(error);
          
        }
      );
    }
  }
}

