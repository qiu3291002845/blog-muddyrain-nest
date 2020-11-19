import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comments } from './comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comments) private readonly entity: Repository<Comments>,
  ) {}
  async create(body: Comments) {
    const res = await this.entity.create(body);
    await this.entity.save(res)
    return {
      message: '成功',
      statusCode: 200,
    };
  }
  async update(body: Comments, id: string) {
    let status = 1;
    await this.entity.update(id, body).catch(() => {
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
      const user = await this.entity.query(`
      SELECT * FROM users WHERE user_id = '${id}'
    `);
      return {
        message: '成功',
        statusCode: 200,
        user: user[0],
      };
    } else {
      const users = await this.entity.query(`
      SELECT * FROM users
    `);
      return {
        message: '成功',
        statusCode: 200,
        users,
      };
    }
  }
}
