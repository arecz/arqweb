import { trigger, state, animate, transition, style } from '@angular/animations';

export const zoomInAnimation =

   trigger('zoomInAnimation', [


       transition(':enter', [
           style({ transform: 'scale(0.9)' }),
           animate('.6s 1000ms ease-in-out', style({  transform: 'scale(1)' }))
       ]),
   ]);
