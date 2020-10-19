import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from '@shared/button/button.module';
import { IconModule } from '@shared/icon/icon.module';

import { CodeComponent } from './code/code.component';
import { FocusDirective } from './focus/focus.directive';
import { FormContainerComponent } from './form-container/form-container.component';
import { InputDirective } from './input/input.directive';

const COMPONENTS: Type<any>[] = [
  CodeComponent,
  FormContainerComponent
];

const DIRECTIVES: Type<any>[] = [
  InputDirective,
  FocusDirective
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconModule,
    ButtonModule
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES
  ]
})
export class FormModule {
}
