import { Component } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GLOBAL } from '../../../services/GLOBAL';
declare var toastr: any;
declare var $: any;

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrl: './edit-producto.component.css',
})
export class EditProductoComponent {
  public active = 1;
  public producto: any = {};
  public token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : '';
  public galeria: Array<any> = [];
  public imagen: any = undefined;
  public imagen_titulo = '';
  public imagen_str: any = '';
  public btn_load = false;
  public id = '';
  public load_galeria = true;
  public url = GLOBAL.url;
  public btn_delete_imagen = false;

  constructor(
    private _productoService: ProductoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.id = params['id'];
      this.init_data();
      this.init_galeria();
    });
  }

  init_data() {
    this._productoService
      .getProducto(this.id, this.token)
      .subscribe((response) => {
        console.log(response);
        this.producto = response.data;
      });
  }
  init_galeria() {
    this.load_galeria = true;
    this._productoService
      .getGaleriaProducto(this.id, this.token)
      .subscribe((response) => {
        this.galeria = response.data;
        this.load_galeria = false;
      });
  }
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
        if (file.size <= 2 * 1024 * 1024) {
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            console.log(reader.result);
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
      let data = {
        imagen: this.imagen,
        titulo: this.imagen_titulo,
        producto: this.id,
      };

      this._productoService
        .uploadImgProducto(data, this.token)
        .subscribe((response) => {
          console.log(response);
          if (response.data != undefined) {
            toastr.success('Imagen agregada.');
            this.imagen = undefined;
            this.imagen_titulo = '';
            $('#FileInput').val('');
            this.init_galeria();
          } else {
            toastr.error(response.message);
          }
        });
    }
  }

  remove_imagen(idx: any) {
    this.galeria.splice(idx, 1);
  }

  actualizar() {
    if (!this.producto.titulo) {
      toastr.error('El titulo es requerido');
    } else if (!this.producto.descripcion) {
      toastr.error('La descripción es requerida');
    } else {
      const data: any = {
        titulo: this.producto.titulo,
        descripcion: this.producto.descripcion,
      };
      console.log(data);
      this._productoService
        .updateProducto(this.id, data, this.token)
        .subscribe((response) => {
          console.log(response);
          if (response.data != undefined) {
            toastr.success('Actualización completada.');
            this.init_data();
            this._router.navigate(['/producto']);
          } else {
            toastr.error(response.message);
          }
        });
    }
  }
  delete_imagen(id: any) {
    this.btn_delete_imagen = true;
    this._productoService
      .deleteImgProducto(id, this.token)
      .subscribe((response) => {
        if (response.data != undefined) {
          toastr.success('Eliminacion completada.');
          this.init_galeria();
        } else {
          toastr.error(response.message);
        }
        this.btn_delete_imagen = false;
        $('#deleteImg-' + id).modal('hide');
      });
  }
}
