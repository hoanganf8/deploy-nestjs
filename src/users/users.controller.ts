import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('')
  getUsers() {
    return 'something 111';
  }
  @Post('')
  createUser() {
    return this.usersService.createUser();
  }
}
