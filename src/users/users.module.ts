import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { BullModule } from '@nestjs/bullmq';
import { QueueName } from 'src/app.interface';
import { EmailConsumer } from './email.consumer';

@Module({
  controllers: [UsersController],
  providers: [UsersService, EmailConsumer],
  imports: [
    BullModule.registerQueue(
      {
        name: QueueName.EMAIL,
      },
      {
        name: QueueName.TELEGRAM,
      },
    ),
  ],
})
export class UsersModule {}
