import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { CommonModule } from '@angular/common';

@Component({

  standalone: true,
  imports: [TitleComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <!-- llamamos el omponente app-title y le indicamos el title que debe tener, en este caso change detention, recuerda importar el componente, currentFramework es un metodo el cual muestra el title del framework actual, antes y despues del settimeout-->
  <app-title [title]="currentFramework()"/>
  <pre>
    {{frameworkAsProperty | json}}<!-- se debe importar commonModule, para poder ver el json -->
  </pre>
  <pre>
    {{frameworkAsSignal() | json}}<!--los parentesis al final indican que esta es una funcion -->
  </pre>

  `,
  styles: ``
})
export default class ChangeDetentionComponent {

  public currentFramework = computed(() => `Change Detention: ${this.frameworkAsSignal().name}`);

  //metdoos del componente
  public frameworkAsSignal = signal(
    {
      name: 'Angular',
      releaseDate: 2016,
    }
  )

  public frameworkAsProperty = {

      name: 'Angular',
      releaseDate: 2016,
    }

    constructor () {
      setTimeout(() => {// despues de 3 segundos se ejecutara lo que esta dentro del setTimeout, en este caso cambia el nombre del framework de angular a react

        // this.frameworkAsProperty.name = 'React';
        this.frameworkAsSignal.update(value => ({ ...value, name: 'React' }))


        console.log('hecho')
      }, 3000)
    }
}
