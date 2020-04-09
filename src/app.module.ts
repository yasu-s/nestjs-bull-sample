import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppProcessor } from './app.processor';
import { AppService } from './app.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'test',
      redis: {
        host: process.env.REDIS_SERVER || 'localhost',
        port: 6379,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AppProcessor],
})
export class AppModule {}
