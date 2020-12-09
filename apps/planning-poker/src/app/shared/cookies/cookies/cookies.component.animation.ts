import { animate, style, transition, trigger } from '@angular/animations';

export const cookiesComponentAnimation = trigger(
  'inOutAnimation',
  [
    transition(
      ':enter',
      [
        style({
          opacity: 0,
          transform: 'translate3d(0, 100%, 0) scale(.9)'
        }),
        animate('600ms 1700ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          style({
            opacity: .8,
            transform: 'translate3d(0, 0, 0) scale(1)'
          }))
      ]
    ),
    transition(
      ':leave',
      [
        style({
          opacity: .8,
          transform: 'translate3d(0, 0, 0) scale(1)'
        }),
        animate('250ms ease-in',
          style({
            opacity: 0,
            transform: 'translate3d(0, 100%, 0) scale(.9)'
          }))
      ]
    )
  ]
);
