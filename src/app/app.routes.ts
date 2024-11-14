import { Routes } from '@angular/router';

export const routes: Routes = [

    //generamos las rutas, estas estan en dos objetos, uno para el padre y otro para el hijo
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        //rutas para los componentes cerados, debemos exportar el componente por default, para no tener error aca
        children: [
            {
                path: 'change-detention',
                title: 'Change Detention',
                loadComponent: () => import('./dashboard/pages/change-detention/change-detention.component'),
            },
            {
                path: 'control-flow',
                title: 'Control Flow',
                loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),
            },
            {
                path: 'defer-options',
                title: 'Defer Options',
                loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component'),
            },
            {
                path: 'defer-views',
                title: 'Defer Views',
                loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component'),
            },
            {
                path: 'user/:id', //ruta dinamica para llamar por id
                title: 'User',
                loadComponent: () => import('./dashboard/pages/user/user.component'),
            },
            {
                path: 'user-list',
                title: 'User List',
                loadComponent: () => import('./dashboard/pages/users/users.component'),
            },
            {
                path: 'view-transition-1',
                title: 'View Transition 1',
                loadComponent: () => import('./dashboard/pages/view-transition/view-transition1.component'),
            },
            {
                path: 'view-transition-2',
                title: 'View Transition 2',
                loadComponent: () => import('./dashboard/pages/view-transition/view-transition2.component'),
            },
            {
                path: '', redirectTo: 'control-flow', pathMatch: 'full'
            }
        ]
    },

    //definimos la ruta para redireccionar al dashboard cuando la ruta esta vacia
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }



];
