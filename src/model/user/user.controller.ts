import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { hashPass } from 'src/tools/config';
import { Users } from './user.entity';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private user: UserService) {}
  @Post()
  async create(@Body() body: Users) {
    const { user_password } = body;
    body = { ...body, user_password: hashPass(user_password) };
    return await this.user.create(body);
  }

  @Put('/:id')
  async update(@Body() body: Users, @Param('id') id: string) {
    const { user_password } = body;
    body = { ...body, user_password: hashPass(user_password) };
    return await this.user.update(body, id);
  }

  @Get()
  async find() {
    return await this.user.find();
  }

  @Get('/:id')
  async findId(@Param('id') id: string) {
    return await this.user.find(id);
  }
}
