import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LabelController } from './label.controller';
import { Labels } from './label.entity';
import { LabelService } from './label.service';

@Module({
  imports: [TypeOrmModule.forFeature([Labels])],
  controllers: [LabelController],
  providers: [LabelService],
})
export class LabelModule {}
