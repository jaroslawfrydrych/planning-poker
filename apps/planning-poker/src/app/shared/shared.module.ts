import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { ButtonModule } from '@shared/button/button.module';
import { CardModule } from '@shared/card/card.module';
import { FormModule } from '@shared/form/form.module';
import { IconModule } from '@shared/icon/icon.module';
import { LayoutModule } from "./layout/layout.module";

const MODULES: Type<any>[] = [
  ButtonModule,
  LayoutModule,
  FormModule,
  IconModule,
  CardModule
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
