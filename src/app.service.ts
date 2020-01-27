import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(@InjectQueue('test') private readonly testQueue: Queue) {}

  getHello(): string {
    return 'Hello World!';
  }

  async addQueue() {
    const job = await this.testQueue.add({
      foo: 'bar',
    });

    return job.id;
  }
}