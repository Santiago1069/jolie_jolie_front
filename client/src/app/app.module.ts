import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AddTokenInterceptor } from './services/add-token.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AuthenticationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true},
    ProductListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
