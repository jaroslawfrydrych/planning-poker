import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { ButtonModule } from './button/button.module';
import { IconModule } from './icon/icon.module';
import { TextFixedWidthModule } from './text-fixed-width/text-fixed-width.module';

const MODULES: Type<any>[] = [
  ButtonModule,
  IconModule,
  TextFixedWidthModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})

export class UiModule {
}
