import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { QueueName } from 'src/app.interface';
let number = 0;
@Processor(QueueName.EMAIL)
export class EmailConsumer extends WorkerHost {
  async process(job: Job<any, any, string>): Promise<any> {
    number++;
    console.log('Chạy job: ' + number);
    const result = await this.sendEmail(
      job.data.email,
      job.data.subject,
      job.data.message,
    );
    console.log(result);
    // return {};
  }
  sendEmail(to: string, subject: string, message: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (number < 3) {
          reject(
            `Send failed email to ${to} with subject ${subject} and message ${message}`,
          );
        } else {
          resolve(
            `Send email to ${to} with subject ${subject} and message ${message}`,
          );
        }
      }, 3000);
    });
  }
}
