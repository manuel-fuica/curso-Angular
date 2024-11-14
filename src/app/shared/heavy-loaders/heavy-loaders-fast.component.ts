import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'heavy-loaders-fast',
    standalone: true,
    imports: [CommonModule],
    template: `
    
        <section [ngClass]= "['w-full', cssClass]">
            <ng-content></ng-content>
        </section>
    `,
    styles: ``
})
export class HeavyLoadersFastComponent {

    @Input({ required: true}) cssClass!: string;

    //al dar click me muestra este metodo en la consola
    constructor() { 
        console.log('HeaviLoader Cargado')
    }
}