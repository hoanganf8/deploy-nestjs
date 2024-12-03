import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EventName } from 'src/app.interface';

@Injectable()
export class ProductsService {
  @OnEvent(EventName.USER_CREATED)
  handleUserCreatedEvent(data: any) {
    console.log(`Product Service `, data);
  }
}
