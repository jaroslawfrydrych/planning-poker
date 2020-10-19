import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';

const COMPONENTS: Type<any>[] = [
  LayoutComponent,
  HeaderComponent,
  ContentComponent
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
export class LayoutModule {
}
