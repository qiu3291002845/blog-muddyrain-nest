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
    const res = this.entity.create(body);
    await this.entity.save(res);
    return {
      message: '成功',
      statusCode: 200,
    };
  }
  async find(id?) {
    const res = await this.entity.query(`
      SELECT 
        *
      FROM
        comments
      WHERE
	      article_id = ${id}
    `);
    return {
      message: '成功',
      statusCode: 200,
      data: res,
    };
  }
  async delete(id: string) {
    await this.entity.delete(id);
    return {
      message: '成功',
      statusCode: 200,
    };
  }
}
