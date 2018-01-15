// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeOutAnimation =
   // trigger name for attaching this animation to an element using the [@triggerName] syntax
   trigger('fadeOutAnimation', [

       // route 'enter' transition
       transition(':leave', [

           // css styles at start of transition
           style({ opacity: 1 }),

           // animation and styles at end of transition
           animate('.9s 2.5s', style({ opacity: 0 }))
       ]),
   ]);
