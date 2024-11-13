import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
//este alias esta creado en el archivo tsconfig, en la seccion paths asi podemos llamar a la ruta de la carpeta shared
import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';

@Component({
  standalone: true,
  imports: [RouterModule, SidemenuComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export default class DashboardComponent {

}
