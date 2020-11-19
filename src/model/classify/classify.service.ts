import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Classifys } from './classify.entity';

@Injectable()
export class ClassifyService {
  constructor(
    @InjectRepository(Classifys) private readonly entity: Repository<Classifys>,
  ) {}

  async create(json: Classifys) {
    let status = 1;
    const res = await this.entity.create(json);
    await this.entity.save(res).catch(() => {
      status = 0;
    });
    if (status) {
      return {
        message: '成功',
        statusCode: 200,
      };
    } else {
      return {
        message: '该分类名称已存在',
        statusCode: 500,
      };
    }
  }

  async update(body: Classifys, id: string) {
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
        message: '该分类名称已存在',
        statusCode: 500,
      };
    }
  }
  async find(id?) {
    if (id) {
      const res = await this.entity.query(`
      SELECT * FROM classifys WHERE classify_id = '${id}'
    `);
      return {
        message: '成功',
        statusCode: 200,
        data: res[0],
      };
    } else {
      const data = await this.entity.query(`
      SELECT * FROM classifys
    `);
      return {
        message: '成功',
        statusCode: 200,
        data,
      };
    }
  }
  async delete(id) {
    await this.entity.delete(id);
    return {
      message: '成功',
      statusCode: 200,
    };
  }
}
