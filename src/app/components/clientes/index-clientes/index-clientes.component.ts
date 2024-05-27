import { Component } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index-clientes',
  templateUrl: './index-clientes.component.html',
  styleUrls: ['./index-clientes.component.css'],
})
export class IndexClientesComponent {
  public token = typeof window !== 'undefined' ? localStorage.getItem('token') : '';
  public filtro = '';
  public load_data = false;
  public clientes: Array<any> = [];
  public page = 1;
  public pageSize = 20;
  public btn_state_load = false;

  constructor(
    private _clienteService: ClienteService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.queryParams.subscribe((params) => {
      this.filtro = params['filter'];
     
        this.init_data();
      
    });
  }

  init_data() {
    this.load_data = true;
    this._clienteService
      .gettCliente(this.filtro, this.token)
      .subscribe((response) => {
        this.clientes = response;
        this.load_data = false;
      });
  }

  filter() {
    if (this.filtro) {
      this._router.navigate(['/clientes'], {
        queryParams: { filter: this.filtro },
      });
    } else {
      this._router.navigate(['/clientes']);
    }
  }

  setState(id: any, estado: any) {}
}
