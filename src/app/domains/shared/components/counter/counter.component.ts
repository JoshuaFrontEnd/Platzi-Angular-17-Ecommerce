import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  counter = signal(0);
  // Crear una referencia para poder destruir la ejecucion de una funcion al desmontar un componente, ya que al desmontar un componente no se destruyen las funciones que siguen ejecutandose
  counterRef: number | undefined;

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
    // Detectar si se cambio el input duration, el log mostrar el valor si se cambio y si no mostrará undefined
    const duration = changes['duration'];
    console.log('Duration es: ', duration);

    // Entonces con esta información puedo ejecutar una funcion async/nosync cada vez que cambie el input duration
    if (duration) {
      this.doSomething();
    }

    // Validar si el valor de duration es distinto al valor anterior y hacer algo de acuerdo a eso, esto es util cuando el valor de un input especifico no cambia y queremos evitar llamar siempre la funcion cuando cambia el input
    // if ( duration && duration.previousValue !== duration.currentValue ) {
    //   this.doSomething();
    // }
  }

  // Este evento se ejecuta una sola vez, despues de que se renderice el componente, acá recien se pueden hacer peticiones asíncronas, async, then, suscribe, etc
  ngOnInit() {
    console.log('ngOnInit');
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    console.log('-'.repeat(10));

    this.counterRef = window.setInterval(() => {
      console.log('run interval');

      this.counter.update((statePrev) => statePrev + 1);
    }, 1000);
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

    // Cuando se destruya el componente, tambien se destruira la ejecucion de la funcion interval
    window.clearInterval(this.counterRef);
  }

  doSomething() {
    console.log('change duration');
  }
}
