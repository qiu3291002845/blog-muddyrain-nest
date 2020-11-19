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
    const { user_id, user_friends_id } = json;
    const user: UserFriends[] = await this.entity.query(`
    SELECT
      *
    FROM
      user_friends
    WHERE
      user_id = ${user_id}
    `);
    const isHas = user.filter(item => {
      return item.user_friends_id == user_friends_id;
    });
    if (isHas.length === 0) {
      const res = await this.entity.create(json);
      await this.entity.save(res);
      return {
        message: '成功',
        statusCode: 200,
      };
    } else {
      return {
        message: '不能重复添加好友哦',
        statusCode: 500,
      };
    }
  }

  async update(note: string, id: string) {
    await this.entity.update(id, { user_note: note });
    return {
      message: '成功',
      statusCode: 200,
    };
  }

  async delete(id: string) {
    await this.entity.delete(id);
    return {
      message: '成功',
      statusCode: 200,
    };
  }
  async find(user_id: string) {
    const res = [];
    const data = await this.entity.query(`
    SELECT
      *
    FROM
      user_friends
    WHERE
      user_id = ${user_id} 
    `);
    for (let item of data) {
      const user = await this.entity.query(`
      SELECT
      *
    FROM
      users
    WHERE
      user_id = ${item.user_friends_id}
      `);
      delete item.user_friends_id;
      item = { ...item, friendInfo: user[0] };
      res.push(item);
    }

    return {
      message: '成功',
      statusCode: 200,
      data: res,
    };
  }
}
