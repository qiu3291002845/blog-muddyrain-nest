import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users) private readonly user: Repository<Users>,
  ) {}
  async create(body: Users) {
    const user = await this.user.create(body);
    let status = 1;
    await this.user.save(user).catch(() => {
      status = 0;
    });
    if (status) {
      return {
        message: '成功',
        statusCode: 200,
      };
    } else {
      return {
        message: '用户名或邮箱已存在',
        statusCode: 500,
      };
    }
  }
  async update(body: Users, id: string) {
    let status = 1;
    await this.user.update(id, body).catch(() => {
      status = 0;
    });
    if (status) {
      return {
        message: '成功',
        statusCode: 200,
      };
    } else {
      return {
        message: '用户名或邮箱已存在',
        statusCode: 500,
      };
    }
  }
  async find(id?) {
    if (id) {
      const user = await this.user.query(`
      SELECT * FROM users WHERE user_id = '${id}'
    `);
      return {
        message: '成功',
        statusCode: 200,
        data: user[0],
      };
    } else {
      const users = await this.user.query(`
      SELECT * FROM users
    `);
      return {
        message: '成功',
        statusCode: 200,
        data: users,
      };
    }
  }
}
