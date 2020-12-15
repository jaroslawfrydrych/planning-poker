import { ConnectionError, ConnectionStatus } from '@planning-poker/utils';

export namespace SocketActions {
  export class SetConnectionStatus {
    static readonly type = '[SocketActions] Set connection status';

    constructor(public connectionStatus: ConnectionStatus & ConnectionError) {
    }
  }
}
