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

  // Esto se ejecuta una sola vez, antes de que se renderice el componente, no colocar nada async
  constructor() {
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  // Este evento se ejecuta antes y durante el render del componente, cuando exista algun cambio y permite identificar que cambió
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
    console.log('-'.repeat(10));
  }

  // Este evento se ejecuta una sola vez, despues de que se renderice el componente, acá recien se pueden hacer peticiones asíncronas, async, then, suscribe, etc
  ngOnInit() {
    console.log('ngOnInit');
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    console.log('-'.repeat(10));
  }

  // Este evento se ejecuta una sola vez inmeditamente despues de ngOnInit y sirve para detectar si se renderizaron los hijos del componente
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  // Este evento se ejecuta inmediatamente antes de que se destruya el componente
  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }
}
