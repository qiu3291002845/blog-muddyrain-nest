import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './tools/config';
import { UserModule } from './model/user/user.module';
import { UserFriendsModule } from './model/user-friends/user-friends.module';
import { CommentModule } from './model/comment/comment.module';
import { ArticleModule } from './model/article/article.module';
import { ClassifyModule } from './model/classify/classify.module';
import { LabelModule } from './model/label/label.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dbConfig,
      type: 'mysql',
    }),
    UserModule,
    UserFriendsModule,
    CommentModule,
    ArticleModule,
    ClassifyModule,
    LabelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
