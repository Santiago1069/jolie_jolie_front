import { Component, OnInit } from '@angular/core';
import { ComprasService } from 'src/app/services/compras.service';

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent implements OnInit {

  searchText: any;

  compras: any = [];

  public page!: number;

  constructor(private comprasService: ComprasService) { }

  ngOnInit(): void {
    this.getCompras();
  }

  getCompras(){
    this.comprasService.getCompras().subscribe(
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
