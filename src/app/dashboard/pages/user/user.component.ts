import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { User } from '../../../interfaces/req-response';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `

    <app-title title="Información del usuario"></app-title>

    @if (user()) {

      <section>
      <h1>Información del usuario</h1>
      <img src="{{user()!.avatar}}" alt="">

      <div>
        <h3>{{user()!.first_name}} {{user()!.last_name}}</h3>
      </div>
      </section>
      
    } @else {
      <p>Cargando información</p>
    }
  
  `,
  styles: ``
})
export default class UserComponent {

  private route = inject(ActivatedRoute)
  private usersService = inject(UsersService)



  // public user = signal<User| undefined>(undefined)
  public user = toSignal(

    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id)
      )
    )

  )


  // constructor() {
  //   this.route.params.subscribe(params => console.log({ params }))
  // }

}
