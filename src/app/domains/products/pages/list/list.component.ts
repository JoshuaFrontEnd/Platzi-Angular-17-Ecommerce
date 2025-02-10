import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { Product } from '../../../shared/models/product.models';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);

  // Inyectar el servicio desde el store
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  // Obtener los productos desde el servicio
  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (err) => console.error(err),
    });
  }

  // Evento recibido desde el hijo
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
