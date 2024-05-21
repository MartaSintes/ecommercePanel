import { Component } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { Router } from '@angular/router';
declare var toastr: any;
declare var $: any;

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrl: './create-producto.component.css',
})
export class CreateProductoComponent {
  public active = 1;
  public producto: any = {};
  public imagen: any = undefined;
  public imagen_titulo = '';
  public galeria: Array<any> = [];
  public imagen_str: any = '';
  public token: string | null = localStorage.getItem('token');
  public btn_load = false;

  constructor(
    private _productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit() {}

  setActive(value: any) {
    this.active = value;
  }

  uploadImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      if (
        file.type == 'image/jpeg' ||
        file.type == 'image/png' ||
        file.type == 'image/gif' ||
        file.type == 'image/webp'
      ) {
        if (file.size <= 2000000) {
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.imagen_str = reader.result;
          };
          this.imagen = file;
        } else {
          toastr.error('Debe pesar menos de 2MB');
          this.imagen = undefined;
          $('#FileInput').val('');
        }
      } else {
        toastr.error('Se permiten solo imagenes');
        this.imagen = undefined;
        $('#FileInput').val('');
      }
    } else {
      console.log('No se selecciono nada');
    }
  }

  add_imagen() {
    if (this.imagen == undefined) {
      toastr.error('Debe subir una imagen valida');
    } else if (!this.imagen_titulo) {
      toastr.error('El titulo es requerido');
    } else {
      this.galeria.push({
        imagen: this.imagen,
        titulo: this.imagen_titulo,
        str: this.imagen_str,
      });

      this.imagen = undefined;
      this.imagen_titulo = '';
      this.imagen_str = '';

      $('#FileInput').val('');
    }
  }

  crear() {
    if (!this.producto.titulo) {
      toastr.error('El titulo es requerido');
    }else if(!this.producto.descripcion){
      toastr.error("La descripción es requerida");
    }else if (this.galeria.length == 0) {
      toastr.error('Las galeria esta vacia');
    } else {
      const arr_galería = [];
      for (var item of this.galeria) {
        arr_galería.push({
          imagen: item.imagen,
          titulo: item.titulo,
        });
      }
      this.producto.galeria = arr_galería;
      this._productoService
        .createProducto(this.producto, this.token)
        .subscribe((response) => {
          console.log(response);
          this.router.navigate(['/producto']);
        });
    }
  }

  remove_imagen(idx: any) {
    this.galeria.splice(idx, 1);
  }
}
