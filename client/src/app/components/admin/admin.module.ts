import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { AppComponent } from 'src/app/app.component';
import { AdminNavigationComponent } from './navigation/navigation.component';
import { PedidosListComponent } from './pedidos-list/pedidos-list.component';
import { MensajesListComponent } from './mensajes-list/mensajes-list.component';
import { VentasAcordionComponent } from './ventas-acordion/ventas-acordion.component';




@NgModule({
  declarations: [
    ProductFormComponent,
    ProductListComponent,
    UserFormComponent,
    UserListComponent,
    AdminNavigationComponent,
    PedidosListComponent,
    MensajesListComponent,
    VentasAcordionComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserModule,
    Ng2SearchPipeModule
  ],
   exports: [
    ProductFormComponent,
    ProductListComponent,
    UserFormComponent,
    UserListComponent
   ],
   bootstrap:    [ AppComponent ]
})
export class AdminModule { }
