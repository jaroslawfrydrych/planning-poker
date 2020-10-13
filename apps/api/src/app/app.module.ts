import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { PokerModule } from './poker/poker.module';

@Module({
  imports: [PokerModule],
  controllers: [AppController]
})
export class AppModule {
}
