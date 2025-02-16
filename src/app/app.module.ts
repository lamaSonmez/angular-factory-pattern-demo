import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicProductComponent } from './dynamic-product/dynamic-product.component';
import { ElectronicsProductComponent } from './electronics-product/electronics-product.component';
import { ClothingProductComponent } from './clothing-product/clothing-product.component';
import { FurnitureProductComponent } from './furniture-product/furniture-product.component';
import { ProductContainerComponent } from './product-container/product-container.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicProductComponent,
    ElectronicsProductComponent,
    ClothingProductComponent,
    FurnitureProductComponent,
    ProductContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
