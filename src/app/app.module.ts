import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductsListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductsListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
