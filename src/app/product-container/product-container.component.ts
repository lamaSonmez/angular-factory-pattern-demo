import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ProductFactoryService } from '../services/product-factory.service';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent {
  @ViewChild('productHost', { read: ViewContainerRef, static: true }) productHost!: ViewContainerRef;

  constructor(private productFactory: ProductFactoryService) {}

  showProduct(type: string) {
    const component = this.productFactory.getComponent(type);
    if (component) {
      this.productHost.clear();
      this.productHost.createComponent(component);
    }
  }
}