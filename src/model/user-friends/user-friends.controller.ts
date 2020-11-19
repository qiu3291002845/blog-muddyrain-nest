import { Body, Controller, Post } from '@nestjs/common';
import { UserFriends } from './user-friends.entity';
import { UserFriendsService } from './user-friends.service';

@Controller('user-friends')
export class UserFriendsController {
  constructor(private readonly service: UserFriendsService) {}
  @Post()
  create(@Body() json: UserFriends) {
    console.log(json);
  }
}
