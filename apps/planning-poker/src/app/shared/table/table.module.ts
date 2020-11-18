import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { CardModule } from '@shared/card/card.module';
import { IconModule } from '@shared/icon/icon.module';

import { TableCardContainerComponent } from './table-card-container/table-card-container.component';
import { TableComponent } from './table/table.component';

const COMPONENTS: Type<any>[] = [
  TableComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    TableCardContainerComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    IconModule
  ],
  exports: [
    ...COMPONENTS,
    TableCardContainerComponent
  ]
})
export class TableModule {
}
