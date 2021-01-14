import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { UiModule } from '@planning-poker/ui';

import { ConfirmComponent } from './confirm/confirm.component';
import { InsertionPointDirective } from './insertion-point.directive';
import { ModalCommonComponent } from './modal-common/modal-common.component';
import { OverlayComponent } from './overlay/overlay.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    ModalCommonComponent,
    OverlayComponent,
    InsertionPointDirective,
    ConfirmComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    NgxsModule.forFeature([]),
    UiModule
  ]
})
export class ModalModule {
}
