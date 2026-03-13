import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
    // find out which button was clicked
    clickHandler(event: Event) {
        // This is the most reliable way because it always refers to the element that the event listener is attached to, even if you clicked an icon inside the button. 
        
        let countEl = document.getElementById("count")
        if (countEl !== null) {
            

            if (event.currentTarget !== null) {
                // if the target is reset button, reset the count
                if (event.currentTarget === document.getElementById("btnReset"))
                {
                    countEl.innerHTML = "0"; // must be a string
                } else { // if the target is increment button, then increment
                    countEl.innerHTML = (Number(countEl.innerHTML) + 1).toString();
                }
                
            }
            
        }

        
    }
}
