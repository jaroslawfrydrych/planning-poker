import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { IconComponent } from './icon/icon.component';

const COMPONENTS: Type<any>[] = [
  IconComponent
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
export class IconModule { }
