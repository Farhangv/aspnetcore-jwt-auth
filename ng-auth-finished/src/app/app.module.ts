import { AuthGuard } from './guards/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { JwtHelper } from 'angular2-jwt'

import { HomeComponent } from 'app/home/home.component';
import { LoginComponent } from 'app/login/login.component';
import { AppComponent } from './app/app.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    AppComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
    ])
  ],
  providers: [JwtHelper, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
