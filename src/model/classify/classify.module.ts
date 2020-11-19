import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassifyController } from './classify.controller';
import { Classifys } from './classify.entity';
import { ClassifyService } from './classify.service';

@Module({
  imports: [TypeOrmModule.forFeature([Classifys])],
  controllers: [ClassifyController],
  providers: [ClassifyService],
})
export class ClassifyModule {}
