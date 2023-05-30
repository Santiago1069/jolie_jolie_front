import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexProductComponent } from './index-product/index-product.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'
import { AppComponent } from 'src/app/app.component';
import { CompradorNavigationComponent } from './navigation/navigation.component';
import { MisPedidosComponent } from './mis-pedidos/mis-pedidos.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentFailureComponent } from './payment-failure/payment-failure.component';
import { CartService } from 'src/app/services/cart.service';



@NgModule({
  declarations: [
    IndexProductComponent,
    CompradorNavigationComponent,
    MisPedidosComponent,
    PaymentSuccessComponent,
    PaymentFailureComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [ CartService],
  exports: [IndexProductComponent]
})
export class ClientsModule { }
