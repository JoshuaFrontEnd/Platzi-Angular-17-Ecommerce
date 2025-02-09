import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  // Esto se ejecuta antes de que se renderice el componente, no colocar nada async
  constructor() {
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  // Este evento se ejecuta antes y durante el render del componente y permite identificar que cambió
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
    console.log('-'.repeat(10));
  }
}
