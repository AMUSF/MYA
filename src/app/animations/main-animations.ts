import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

export let fadeInOut = trigger('fadeInOut', [
  state('void', style({
    opacity: 0
  })),
  transition(':enter, :leave', [
    animate('731ms 371ms ease-in-out')
  ])
]);

export let fadeInOutLeft = trigger('fadeInOutLeft', [
  state('void', style({
    opacity: 0,
    transform: "translateX(-100%)"
  })),
  transition(':enter, :leave', [
    animate('371ms 71ms ease-in-out')
  ])
]);

export let fadeInOutBottom = trigger('fadeInOutBottom', [
  state('void', style({
    opacity: 0,
    transform: "translateY(31px)"
  })),
  transition(':enter, :leave', [
    animate('731ms 731ms ease-in-out')
  ])
]);

export let staggerList = trigger('staggerList', [
  // state('void', style({
  //   opacity: 0,
  //   transform: "translateX(-100%)"
  // })),

  transition('* => *', [

    query(':leave', [
      stagger(100, [
        animate('3s', style({ opacity: 0 }))
      ])
    ]),

    query(':enter', [
      style({ opacity: 0 }),
      stagger('3s', [
        animate('3s', style({ opacity: 1 }))
      ])
    ])

  ])
]);


