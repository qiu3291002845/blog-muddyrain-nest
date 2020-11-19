import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Comments } from './comment.entity';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private service: CommentService) {}
  @Post()
  async create(@Body() body: Comments) {
    return await this.service.create(body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }

  @Get('/:id')
  async find(@Param('id') id: string) {
    return await this.service.find(id);
  }
}
