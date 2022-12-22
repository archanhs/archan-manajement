import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserPageComponent } from './components/user-page/user-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { QrgenPageComponent } from './pages/qrgen-page/qrgen-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'user',
    component: UsersListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'product',
    component: ProductListComponent,
  },
  {
    path: 'qrgen',
    component: QrgenPageComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
