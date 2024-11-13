import { Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  //metodos y propiedades que utilizaremos
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal(['Angular', 'React', 'Vue', 'Svelte', 'Solid']);
  public frameworks2 = signal([]);


    //cambia el estado de showContent al hacer click en el btn si era false pasa a true y viceversa
  public toggleContent() {
    this.showContent.update(value => !value);
  }


}
