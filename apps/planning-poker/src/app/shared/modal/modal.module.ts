import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ModalCommonComponent } from './modal-common/modal-common.component';

@NgModule({
  declarations: [ModalCommonComponent],
  imports: [
    CommonModule,
    NgxsModule.forFeature([
    ])
  ]
})
export class ModalModule { }
