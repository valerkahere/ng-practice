import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {

    // use signal instead of hardcoded value
    counterValue = signal(55);
    
    constructor() {
        console.log(`counter value: ${this.counterValue()}`);
    }

    // find out which button was clicked
    clickHandler(event: Event) {
        // This is the most reliable way because it always refers to the element that the event listener is attached to, even if you clicked an icon inside the button. 
        // increment, decrement, resety
        

            

            if (event.currentTarget !== null) {
                // if the target is reset button, reset the count
                if (event.currentTarget === document.getElementById("btnReset"))
                {
                    this.counterValue.set(0);
                } // if it's decrement button, decrement by 1
                else if (event.currentTarget === document.getElementById("btnDec")) {
                    //countEl.innerHTML = (Number(countEl.innerHTML) - 1).toString();
                    console.log('decrementing...');
                    this.counterValue.set(this.counterValue() - 1);
                } 
                else { // if the target is increment button, then increment
                    // countEl.innerHTML = (Number(countEl.innerHTML) + 1).toString();
                    console.log("incrementing");
                    this.counterValue.set(this.counterValue() + 1);
                }
                
            }
            
        

        
    }
}
