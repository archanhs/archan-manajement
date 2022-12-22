import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBrandComponent } from './components/nav-brand/nav-brand.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductFormComponent } from './components/products/product-form/product-form.component';
import { ToasterComponent } from './components/toaster/toaster.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { QRCodeModule } from 'angular2-qrcode';
import { QrgenPageComponent } from './pages/qrgen-page/qrgen-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavBrandComponent,
    DashboardPageComponent,
    UserPageComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFormComponent,
    ToasterComponent,
    UsersListComponent,
    UserFormComponent,
    QrgenPageComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
