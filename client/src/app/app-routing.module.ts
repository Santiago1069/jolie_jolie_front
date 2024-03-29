import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { ProductFormComponent } from './components/admin/product-form/product-form.component';
import { AuthenticationComponent } from './components/authentication/authentication.component'
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { UserFormComponent } from './components/admin/user-form/user-form.component';
import { PedidosListComponent } from './components/admin/pedidos-list/pedidos-list.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { MensajesListComponent } from './components/admin/mensajes-list/mensajes-list.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'loginUser',
    pathMatch: 'full'
  },
  {
    path: 'admin/products',
    component: ProductListComponent
  },

  {
    path: 'product/add',
    component: ProductFormComponent
  },
  {
    path: 'product/edit/:id',
    component: ProductFormComponent
  },
  {
    path: 'newUser',
    component: AuthenticationComponent
  },
  {
    path: 'loginUser',
    component: AuthenticationComponent
  },
  {
    path: 'loginUser/:user&:token',
    component: AuthenticationComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'user/add',
    component: UserFormComponent
  },
  {
    path: 'user/edit/:id',
    component: UserFormComponent
  },
  {
    path: 'pedidos',
    component: PedidosListComponent
  },
  {
    path:'forgotPassword',
    component: ForgotPasswordComponent
  },
  {
    path:'recoverPassword',
    component: RecoverPasswordComponent
  },
  {
    path: 'mensajes',
    component: MensajesListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
