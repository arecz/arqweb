import { trigger, state, animate, transition, style } from '@angular/animations';

export const zoomInLongAnimation =

   trigger('zoomInLongAnimation', [


       transition(':enter', [
           style({ transform: 'scale(0.9)' }),
           animate('.7s 1400ms ease-in-out', style({  transform: 'scale(1)' }))
       ]),
   ]);
