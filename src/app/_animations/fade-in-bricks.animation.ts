// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInBricksAnimation =
   // trigger name for attaching this animation to an element using the [@triggerName] syntax
   trigger('fadeInBricksAnimation', [

       // route 'enter' transition
       transition(':enter', [

           // css styles at start of transition
           style({ 'transform': 'scale(0.95)', 'opacity': '0'}),

           // animation and styles at end of transition
           animate('.3s 1.2s', style({ 'transform': 'scale(1)', 'opacity': '1'}))
       ]),
   ]);
