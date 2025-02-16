import { Injectable, Type } from '@angular/core';
import { ClothingProductComponent } from '../clothing-product/clothing-product.component';
import { ElectronicsProductComponent } from '../electronics-product/electronics-product.component';
import { FurnitureProductComponent } from '../furniture-product/furniture-product.component';

@Injectable({ providedIn: 'root' })
export class ProductFactoryService {
  private productMap = new Map<string, Type<any>>([
    ['electronics', ElectronicsProductComponent],
    ['clothing', ClothingProductComponent],
    ['furniture', FurnitureProductComponent]
  ]);

  constructor() {}

  getComponent(productType: string): Type<any> | null {
    return this.productMap.get(productType) || null;
  }
}