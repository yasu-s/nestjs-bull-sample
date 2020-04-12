import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('bull_test')
  bullTest() {
    return this.appService.addQueue();
  }
}
