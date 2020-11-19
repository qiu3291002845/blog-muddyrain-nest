import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Articles } from './article.entity';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private service: ArticleService) {}
  @Post()
  async craete(@Body() json: Articles) {
    return await this.service.create(json);
  }

  @Put('/:id')
  async update(@Body() json: Articles, @Param('id') id: string) {
    return await this.service.update(json, id);
  }
  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
  @Get()
  async findAll() {
    return this.service.find();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.service.find(id);
  }
}
