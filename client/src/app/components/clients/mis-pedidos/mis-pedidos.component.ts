import { Component, OnInit } from '@angular/core';
import { ComprasService } from 'src/app/services/compras.service';

@Component({
  selector: 'app-mis-pedidos',
  templateUrl: './mis-pedidos.component.html',
  styleUrls: ['./mis-pedidos.component.css']
})
export class MisPedidosComponent implements OnInit {
  searchText: any;

  compras: any = [];

  public page!: number;

  constructor(private comprasService: ComprasService) { }

  ngOnInit(): void {
    this.getCompras();
  }

  getCompras(){
    this.comprasService.getMisCompras().subscribe(
      res => {
        this.compras = res;
        console.log(this.compras);
        
      },
      err => {
        console.log(err)
      }
    )
  }

}
