import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(@InjectQueue('test') private readonly testQueue: Queue) {}

  async addQueue() {
    const job = await this.testQueue.add(
      {
        foo: 'bar',
      },
      { lifo: true },
    );

    return job.id;
  }

  async getState(jobId: number) {
    const job = await this.testQueue.getJob(jobId);
    return job.getState();
  }
}
