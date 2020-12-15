import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { ButtonComponent } from './button/button.component';

const COMPONENTS: Type<any>[] = [
  ButtonComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ButtonModule {
}
