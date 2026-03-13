import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: `
    <app-header></app-header>
    <main>
    </main>
    

    <router-outlet />
  `,
  styles: [`
        main {
            padding-inline: 1rem;
        }
    `],
})
export class App {
  protected readonly title = signal('ng-practice');
}
