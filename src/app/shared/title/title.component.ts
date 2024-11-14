import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  //app-title es el nombre del componente
  selector: 'app-title',
  standalone: true,
  imports: [],
  //template es el html, en este caso es solo un h1, no es un html externo, este html recibe el title desde donde usamos el componente
  template: `
  <h1 class="text-3xl mb-5">{{ title }} - {{ withShadow}}</h1>
  `,
  styles: ``
})
export class TitleComponent {

  //pasamos el title por input, y lo definimos en require para que sea obligatorio, este es el metodo:
  @Input({ required: true}) title: string = '';
  @Input({ transform: booleanAttribute}) withShadow: boolean = false;
}
