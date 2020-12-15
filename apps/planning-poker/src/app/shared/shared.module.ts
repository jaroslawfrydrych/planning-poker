import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { CardModule } from '@shared/card/card.module';
import { CookiesModule } from '@shared/cookies/cookies.module';
import { FormModule } from '@shared/form/form.module';
import { LayoutModule } from '@shared/layout/layout.module';
import { ModalModule } from '@shared/modal/modal.module';
import { TableModule } from '@shared/table/table.module';

const MODULES: Type<any>[] = [
  CardModule,
  CookiesModule,
  FormModule,
  LayoutModule,
  TableModule,
  ModalModule
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
