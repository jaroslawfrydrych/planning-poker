import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { ButtonModule } from '@shared/button/button.module';

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
    ButtonModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class CookiesModule { }
