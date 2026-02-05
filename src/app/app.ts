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

    <router-outlet />
  `,
  styles: [`

    `],
})
export class App {
  protected readonly title = signal('ng-practice');
}
