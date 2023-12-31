import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { FirstService } from './services/first/first.service';
import { SecondService } from './services/second/second.service';
import { AppService } from './app.service';
import { HelperService } from './services/helper/helper.service';
import { ThirdService } from './services/third/third.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    FirstService,
    SecondService,
    AppService,
    ThirdService,
    HelperService,
  ],
})
export class AppModule {}
