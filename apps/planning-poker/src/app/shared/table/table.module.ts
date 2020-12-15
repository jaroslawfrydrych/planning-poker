import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { UiModule } from '@planning-poker/ui';

import { CardModule } from '@shared/card/card.module';

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
    UiModule,
    CardModule
  ],
  exports: [
    ...COMPONENTS,
    TableCardContainerComponent
  ]
})
export class TableModule {
}
