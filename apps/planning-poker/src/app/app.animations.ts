import { animate, group, query, style, transition, trigger } from '@angular/animations';

enum Direction {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}

export const routerAnimations =
  trigger('routeAnimations', [
    transition('LandingComponent => WaitComponent', slideTo(Direction.LEFT)),
    transition('WaitComponent => BoardComponent', slideTo(Direction.LEFT)),
    transition('LandingComponent => RoomCodeComponent', slideTo(Direction.LEFT)),
    transition('RoomCodeComponent => YourNameComponent', slideTo(Direction.LEFT)),
    transition('YourNameComponent => GameComponent', slideTo(Direction.LEFT)),
    transition('BoardComponent => WaitComponent', slideTo(Direction.RIGHT)),
    transition('BoardComponent => LandingComponent', slideTo(Direction.RIGHT)),
    transition('WaitComponent => LandingComponent', slideTo(Direction.RIGHT)),
    transition('RoomCodeComponent => LandingComponent', slideTo(Direction.RIGHT)),
    transition('YourNameComponent => RoomCodeComponent', slideTo(Direction.RIGHT)),
    transition('GameComponent => YourNameComponent', slideTo(Direction.RIGHT)),
  ]);

function slideTo(direction: Direction) {
  const optional = {optional: true};
  const translateDirection: string = direction === Direction.LEFT ? '-' : '';
  const translateDirectionNegative: string = translateDirection === '-' ? '' : '-';

  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%',
        height: '100%',
      })
    ], optional),
    query(':enter', [
      style({
        opacity: 0,
        transform: 'translate3d(' + translateDirectionNegative + '75%, 0, 0)'
      })
    ], optional),
    query(':leave', [
      style({
        transform: 'translate3d(0, 0, 0)'
      })
    ], optional),
    group([
      query(':leave', [
        animate('500ms ease', style({
          opacity: 0,
          transform: 'translate3d(' + translateDirection + '75%, 0, 0)'
        }))
      ], optional),
      query(':enter', [
        animate('500ms ease', style({
          opacity: 1,
          transform: 'translate3d(0, 0, 0)'
        }))
      ])
    ])
  ];
}
