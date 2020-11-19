import { ClassifyService } from './classify.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Classifys } from './classify.entity';

@Controller('classify')
export class ClassifyController {
  constructor(private service: ClassifyService) {}
  @Post()
  async create(@Body() body: Classifys) {
    return await this.service.create(body);
  }
  @Put('/:id')
  async update(@Body() body: Classifys, @Param('id') id: string) {
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
