import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(@InjectQueue('test') private readonly testQueue: Queue) {}

  async addQueue() {
    const job = await this.testQueue.add({}, { lifo: true });
    return job.id;
  }
}
