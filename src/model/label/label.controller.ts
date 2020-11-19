import { Labels } from 'src/model/label/label.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LabelService } from './label.service';

@Controller('label')
export class LabelController {
  constructor(private service: LabelService) {}
  @Post()
  async create(@Body() body: Labels) {
    return await this.service.create(body);
  }
  @Put('/:id')
  async update(@Body() body: Labels, @Param('id') id: string) {
    return await this.service.update(body, id);
  }
  @Get()
  async find() {
    return await this.service.find();
  }

  @Get('/:id')
  async findId(@Param('id') id: string) {
    return await this.service.find(id);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
