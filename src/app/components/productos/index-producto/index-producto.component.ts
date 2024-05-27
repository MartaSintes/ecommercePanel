import { Component } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { GLOBAL } from '../../../services/GLOBAL';
declare var $: any;
declare var toastr: any;

@Component({
  selector: 'app-index-producto',
  templateUrl: './index-producto.component.html',
  styleUrl: './index-producto.component.css',
})
export class IndexProductoComponent {
  public token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : '';
  public productos: Array<any> = [];
  public load_data = true;
  public page = 1;
  public pageSize = 4;
  public url = GLOBAL.url;
  public btn_state_load = false;

  constructor(private _productoService: ProductoService) {}

  ngOnInit() {
    this.init_data('Todos');
  }

  init_data(filtro: any) {
    this.load_data = true;
    this._productoService
      .getProductos(filtro, this.token)
      .subscribe((response) => {
        console.log(response);
        if (response.data != undefined) {
          this.productos = response.data;
        } else {
        }
        this.load_data = false;
        console.log(this.productos);
      });
  }
  setState(id: any, estado: any) {
    this.btn_state_load = true;
    this._productoService
      .setStateProducto(id, { estado: estado }, this.token)
      .subscribe((response) => {
        console.log(response);
        $('#state-' + id).modal('hide');
        this.init_data('Todos');
        this.btn_state_load = false;
      });
  }
  deleteProducto(id: any) {
    this._productoService
      .deleteProducto(id, this.token)
      .subscribe((response) => {
        console.log(response);
        // Actualizar la lista de productos después de eliminar
        this.init_data('Todos');
      });
  }
}
