// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInExtraShortAnimation =
   // trigger name for attaching this animation to an element using the [@triggerName] syntax
   trigger('fadeInExtraShortAnimation', [

       // route 'enter' transition
       transition(':enter', [

           // css styles at start of transition
           style({ opacity: 0 }),

           // animation and styles at end of transition
           animate('500ms 50ms', style({ opacity: 1 }))
       ]),
       transition(':leave', [
        
                   // css styles at start of transition
                   style({ opacity: 1 }),
        
                   // animation and styles at end of transition
                   animate('400ms 50ms', style({ opacity: 0 }))
               ]),
   ]);
