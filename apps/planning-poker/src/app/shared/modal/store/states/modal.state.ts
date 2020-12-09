import { State } from '@ngxs/store';

import { ModalModel } from '../model/modal.model';

@State<ModalModel>({
  name: 'modal'
})
export class ModalState {

}
