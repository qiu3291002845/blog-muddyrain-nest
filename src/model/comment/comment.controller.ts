import { Body, Controller, Post } from '@nestjs/common';
import { Comments } from './comment.entity';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private service: CommentService) {}
  @Post()
  async create(@Body() body: Comments) {
    return await this.service.create(body);
  }
}
