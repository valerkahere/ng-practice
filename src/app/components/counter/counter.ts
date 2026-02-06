import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
    clickHandler() {
        let countEl = document.getElementById("count")
        if (countEl !== null && countEl !== undefined) {
            countEl.innerHTML = (Number(countEl.innerHTML) + 1).toString();
        }
    }
}
