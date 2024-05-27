import { Component, OnInit } from '@angular/core';
import { OrdenService } from '../../../services/orden.service';
declare var toastr: any;

@Component({
  selector: 'app-index-orden',
  templateUrl: './index-orden.component.html',
  styleUrl: './index-orden.component.css',
})
export class IndexOrdenComponent implements OnInit {
  public ordenes: any[] = [];
  public token = typeof window !== 'undefined' ? localStorage.getItem('token') : '';
  public page = 1;
  public pageSize = 10;

  constructor(private _ordenService: OrdenService) {}

  ngOnInit(): void {
    this.initData();
  }
  initData(): void {
    console.log(this.token);
    if (this.token) {
      this._ordenService.getOrdenes(this.token).subscribe(
        (response) => {
          console.log(response);
          this.ordenes = response.data;
        },
        (error) => {
          console.error('Error al obtener ordens:', error);
        }
      );
    } else {
      console.error('Token no encontrado');
    }
  }
}
