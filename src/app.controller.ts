import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('bull_test')
  bullTest() {
    return this.appService.addQueue();
  }

  @Get('state/:id')
  getJobState(@Param('id') id: string) {
    return this.appService.getState(Number(id));
  }
}
