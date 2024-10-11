import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    ProductsDetailsComponent, AllProductsComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule, NgxPaginationModule,
    SharedModule
]
  , exports: [
    
    ProductsDetailsComponent, AllProductsComponent
  ]
})
export class ProductsModule { }
