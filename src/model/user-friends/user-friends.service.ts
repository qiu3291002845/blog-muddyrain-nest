import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserFriends } from './user-friends.entity';

@Injectable()
export class UserFriendsService {
  constructor(
    @InjectRepository(UserFriends)
    private readonly entity: Repository<UserFriends>,
  ) {}
  async create(json: UserFriends) {
    // let status = 1;
    const res = await this.entity.create(json);
    await this.entity.save(res);
    return {
      message: '成功',
      statusCode: 200,
    };
  }
}
