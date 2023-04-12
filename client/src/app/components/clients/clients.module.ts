import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexProductComponent } from './index-product/index-product.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'
import { AppComponent } from 'src/app/app.component';



@NgModule({
  declarations: [
    IndexProductComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [IndexProductComponent]
})
export class ClientsModule { }
