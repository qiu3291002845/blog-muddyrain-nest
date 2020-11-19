import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Articles } from './article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Articles) private readonly entity: Repository<Articles>,
  ) {}

  async create(json: Articles) {
    const res = await this.entity.create(json);
    await this.entity.save(res);
    return {
      message: '成功',
      statusCode: 200,
    };
  }
  async update(json: Articles, id: string) {
    await this.entity.update(id, json);
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
  async find(id?) {
    if (!id) {
      const res = [];
      const data = await this.entity.query(`
      SELECT
        *
      FROM
        articles
      `);
      for (let item of data) {
        const classify = await this.entity.query(`
        SELECT
          *
        FROM
        classifys
        WHERE
          classify_id = ${item.classify_id} 
        `);
        const label = await this.entity.query(`
        SELECT
          *
        FROM
        labels
        WHERE
          label_id = ${item.label_id} 
        `);
        const user = await this.entity.query(`
        SELECT
          *
        FROM
          users
        WHERE
          user_id = ${item.user_id} 
        `);
        item = {
          ...item,
          userInfo: user[0],
          labelInfo: label[0],
          classifyInfo: classify[0],
        };
        res.push(item);
      }
      return {
        message: '成功',
        statusCode: 200,
        data: res,
      };
    } else {
      const data = await this.entity.query(`
      SELECT
        *
      FROM
        articles
      WHERE
    	  article_id = ${id}
      `);
      const user = await this.entity.query(`
      SELECT
        *
      FROM
        users
      WHERE
        user_id = ${data[0].user_id} 
      `);
      const classify = await this.entity.query(`
      SELECT
        *
      FROM
      classifys
      WHERE
        classify_id = ${data[0].classify_id} 
      `);
      const label = await this.entity.query(`
      SELECT
        *
      FROM
      labels
      WHERE
        label_id = ${data[0].label_id} 
      `);
      data[0] = {
        ...data[0],
        userInfo: user[0],
        labelInfo: label[0],
        classifyInfo: classify[0],
      };
      return {
        message: '成功',
        statusCode: 200,
        data: data[0],
      };
    }
  }
}
