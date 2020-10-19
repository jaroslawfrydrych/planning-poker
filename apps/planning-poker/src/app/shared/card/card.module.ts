import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { IconModule } from '@shared/icon/icon.module';

import { CardComponent } from './card/card.component';

const COMPONENTS: Type<any>[] = [
  CardComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class CardModule {
}
