import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.models';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  // img = 'https://picsum.photos/300?r=' + Math.random();

  // Declarando cada atributo del objeto
  // @Input({ required: true }) img: string = '';
  // @Input({ required: true }) price: number = 0;
  // @Input({ required: true }) title: string = '';

  // Declarando solo el objeto con todos sus atributos
  @Input({ required: true }) product!: Product;

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    console.log('Click from child');
    this.addToCart.emit(this.product);
  }
}
