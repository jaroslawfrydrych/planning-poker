import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { ButtonModule } from '@shared/button/button.module';
import { CardModule } from '@shared/card/card.module';
import { FormModule } from '@shared/form/form.module';
import { IconModule } from '@shared/icon/icon.module';
import { TextFixedWidthModule } from '@shared/text-fixed-width/text-fixed-width.module';

import { LayoutModule } from './layout/layout.module';

const MODULES: Type<any>[] = [
  ButtonModule,
  CardModule,
  FormModule,
  LayoutModule,
  IconModule,
  TextFixedWidthModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class SharedModule {
}
