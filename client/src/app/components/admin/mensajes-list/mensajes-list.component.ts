import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-mensajes-list',
  templateUrl: './mensajes-list.component.html',
  styleUrls: ['./mensajes-list.component.css']
})
export class MensajesListComponent implements OnInit {

  searchText: any;

  public page!: number;

  mensajes: any = [];

  constructor(private mensajesService: MensajesService) { }

  ngOnInit(): void {
    this.getMensajes();
  }

  getMensajes(){
    this.mensajesService.getMensajes().subscribe(
      res => {
        this.mensajes = res;
      },
      err => {
        console.log(err)
      }
    )
  }

}
