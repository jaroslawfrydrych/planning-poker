import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './button.directive';

const DIRECTIVES: Type<any>[] = [
  ButtonDirective
]

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
export class ButtonModule {
}
