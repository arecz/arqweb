// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInShortAnimation =
   // trigger name for attaching this animation to an element using the [@triggerName] syntax
   trigger('fadeInShortAnimation', [

       // route 'enter' transition
       transition(':enter', [

           // css styles at start of transition
           style({ opacity: 0 }),

           // animation and styles at end of transition
           animate('750ms 100ms', style({ opacity: 1 }))
       ]),

   ]);
