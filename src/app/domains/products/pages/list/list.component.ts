import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-list',
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  // Evento recibido desde el hijo
  fromChild(event: string) {
    console.log('Mensaje recibido desde el hijo:', event);
  }
}
