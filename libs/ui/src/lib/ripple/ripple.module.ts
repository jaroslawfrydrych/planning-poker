import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RippleDirective } from './ripple.directive';

const DIRECTIVES = [
  RippleDirective
];

@NgModule({
  declarations: [
    ...DIRECTIVES
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...DIRECTIVES
  ]
})
export class RippleModule { }
