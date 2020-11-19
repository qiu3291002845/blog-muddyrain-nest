import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserFriendsController } from './user-friends.controller';
import { UserFriends } from './user-friends.entity';
import { UserFriendsService } from './user-friends.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserFriends])],
  controllers: [UserFriendsController],
  providers: [UserFriendsService],
})
export class UserFriendsModule {}
