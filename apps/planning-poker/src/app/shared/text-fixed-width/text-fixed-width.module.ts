import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFixedWidthDirective } from './text-fixed-width.directive';
import { TextFixedWidthComponent } from './text-fixed-width/text-fixed-width.component';

const COMPONENTS: Type<any>[] = [
  TextFixedWidthComponent
];

const DIRECTIVES: Type<any>[] = [
  TextFixedWidthDirective
];

@NgModule({
  declarations: [
    ...DIRECTIVES,
    ...COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...DIRECTIVES,
    ...COMPONENTS
  ]
})
export class TextFixedWidthModule { }
