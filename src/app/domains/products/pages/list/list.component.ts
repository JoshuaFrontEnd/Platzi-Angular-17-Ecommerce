import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 100,
        image: 'https://picsum.photos/600?r=21',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 200,
        image: 'https://picsum.photos/600?r=22',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Product 3',
        price: 300,
        image: 'https://picsum.photos/600?r=23',
        creationAt: new Date().toISOString(),
      },
    ];
    this.products.set(initProducts);
  }

  // Evento recibido desde el hijo
  fromChild(event: string) {
    console.log('Mensaje recibido desde el hijo:', event);
  }
}
