import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('test')
export class AppProcessor {
  @Process()
  async exec(job: Job<unknown>) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    Logger.debug(`id=${job.id}, timestamp=${job.timestamp}`);
  }
}
