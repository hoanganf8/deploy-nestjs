import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { OnEvent } from '@nestjs/event-emitter';
import { EventName } from 'src/app.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @OnEvent(EventName.USER_CREATED)
  async handleUserCreatedEvent(data: any) {
    console.log(`Product: `, data);
  }
}
