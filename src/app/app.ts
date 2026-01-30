import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home],
  template: `
    <app-header></app-header>
    <app-home></app-home>

    <h1>Hello, {{ title() }}</h1>
    <h2>brugh</h2>
    <router-outlet />
  `,
  styles: [`
        * {
            color: green;
        }
    `],
})
export class App {
  protected readonly title = signal('ng-practice');
}
