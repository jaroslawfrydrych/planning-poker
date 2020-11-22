import { GuestModel } from '../poker/guest/store/models/guest.model';
import { HostModel } from '../poker/host/store/models/host.model';
import { SocketModel } from './model/socket.model';
import { StoreName } from './store-name.enum';

export interface StoreModel {
  [StoreName.HOST]: HostModel;
  [StoreName.GUEST]: GuestModel;
  [StoreName.SOCKET]: SocketModel;
}
