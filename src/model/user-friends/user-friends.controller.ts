import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserFriends } from './user-friends.entity';
import { UserFriendsService } from './user-friends.service';

@Controller('user-friends')
export class UserFriendsController {
  constructor(private readonly service: UserFriendsService) {}
  @Post()
  async create(@Body() json: UserFriends) {
    return await this.service.create(json);
  }

  @Put('/:id')
  async update(@Body('user_note') user_note: string, @Param('id') id: string) {
    return await this.service.update(user_note, id);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
  @Get('/:uid')
  async find(@Param('uid') uid: string) {
    return this.service.find(uid);
  }
}
