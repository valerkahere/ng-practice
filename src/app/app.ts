import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
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
