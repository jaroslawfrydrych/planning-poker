import { Module } from '@nestjs/common';
import { PokerGateway } from './poker.gateway';

@Module({
  providers: [
    PokerGateway
  ]
})
export class PokerModule {
}
