import { ConnectionError } from '@shared/enum/connection-error.enum';
import { ConnectionStatus } from '@shared/enum/connection-status.enum';

export namespace SocketActions {
  export class SetConnectionStatus {
    static readonly type = '[SocketActions] Set connection status';

    constructor(public connectionStatus: ConnectionStatus & ConnectionError) {
    }
  }
}
