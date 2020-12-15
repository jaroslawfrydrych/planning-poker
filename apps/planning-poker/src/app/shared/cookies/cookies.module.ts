import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { UiModule } from '@planning-poker/ui';

import { CookiesComponent } from './cookies/cookies.component';

const COMPONENTS: Type<any>[] = [
  CookiesComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class CookiesModule { }
