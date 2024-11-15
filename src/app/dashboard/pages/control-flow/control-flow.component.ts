import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F';
type Status = 'Abierto' | 'Pendiente' | 'Cerrado';

@Component({
  standalone: true,
  imports: [TitleComponent, CommonModule],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  //metodos y propiedades que utilizaremos
  public showContent = signal<Status>('Abierto');
  public grade = signal<Grade>('A');
  public frameworks = signal(['Angular', 'React', 'Vue', 'Svelte', 'Solid']);
  public frameworks2 = signal([]);


    //cambia el estado de showContent al hacer click en el btn si era false pasa a true y viceversa
  public toggleContent() {
    this.showContent.update(value => 'Cerrado' === value ? 'Abierto' : 'Cerrado');
  }


}
