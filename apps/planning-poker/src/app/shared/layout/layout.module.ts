import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

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
