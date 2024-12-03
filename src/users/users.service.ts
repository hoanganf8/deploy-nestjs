import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { Queue } from 'bullmq';
import { EventName, QueueName } from 'src/app.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectQueue(QueueName.EMAIL) private emailQueue: Queue,
    private eventEmitter: EventEmitter2,
  ) {}
  async createUser(body: any) {
    // await this.emailQueue.add(
    //   'sendEmail',
    //   {
    //     email: body.email,
    //     subject: 'Chào bạn mừng bạn ' + body.email,
    //     message: 'Cảm ơn bạn đã đăng ký tài khoản',
    //   },
    //   {
    //     delay: 3000, //Thời gian delay giữa các job
    //     attempts: 3, //Số lần thử nếu job failed
    //     backoff: 3000, //Thời gian chờ của mỗi lần chạy lại
    //   },
    // );
    // console.log(job);
    this.eventEmitter.emit('user.created', body); //Dispatch Event
  }

  @OnEvent(EventName.USER_CREATED)
  handleUserCreatedEvent(data: any) {
    console.log(data);
  }
}
