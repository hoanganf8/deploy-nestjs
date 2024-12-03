import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { BullModule } from '@nestjs/bullmq';
import { UsersModule } from './users/users.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ProductsModule } from './products/products.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TaskService } from './task.service';

@Module({
  imports: [
    // BullModule.forRoot({
    //   connection: {
    //     host: 'localhost',
    //     port: 6379,
    //   },
    // }),
    EventEmitterModule.forRoot(),
    UsersModule,
    ProductsModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, TaskService],
})
export class AppModule {}
