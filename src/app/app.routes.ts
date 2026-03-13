import { Routes } from '@angular/router';

// if path is empty, which means we're at the top or ROOT
// (pathMatch full required if path is empty)
// load 
export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import("./home/home").then(
                m => m.Home
            )
        }
    }, 
    {
        path: 'todos',
        loadComponent: () => {
            return import("./todos/todos").then(
                m => m.Todos
            )
        }
    }
];
