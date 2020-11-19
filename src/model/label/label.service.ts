import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Labels } from './label.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LabelService {
  constructor(
    @InjectRepository(Labels) private readonly entity: Repository<Labels>,
  ) {}

  async create(json: Labels) {
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
        message: '该标签名称已存在',
        statusCode: 500,
      };
    }
  }

  async update(body: Labels, id: string) {
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
        message: '该标签名称已存在',
        statusCode: 500,
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
  async find(id?) {
    if (id) {
      const res = await this.entity.query(`
      SELECT * FROM labels WHERE label_id = '${id}'
    `);
      return {
        message: '成功',
        statusCode: 200,
        data: res[0],
      };
    } else {
      const data = await this.entity.query(`
      SELECT * FROM labels
    `);
      return {
        message: '成功',
        statusCode: 200,
        data,
      };
    }
  }
}
