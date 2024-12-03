import { OnEvent } from '@nestjs/event-emitter';

export class Utils {
  @OnEvent('users.created')
  handleUserCreatedEvent(data: any) {
    console.log(`Utils: `, data);
  }
}
