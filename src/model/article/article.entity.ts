import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
/**
 * 文章列表
 */
export class Articles {
  @PrimaryGeneratedColumn('increment', {
    comment: '博客ID',
  })
  article_id: number;

  @Column('bigint', {
    comment: '发表用户ID',
    nullable: true,
  })
  user_id: number;

  @Column('varchar', {
    comment: '文章标题',
    nullable: true,
  })
  article_title: string;

  @Column('varchar', {
    comment: '文章内容',
    nullable: true,
  })
  article_content: string;

  @Column('bigint', {
    comment: '浏览量',
    nullable: true,
  })
  article_views: number;

  @Column('bigint', {
    comment: '评论总数量',
    nullable: true,
  })
  article_comment_count: number;

  @Column('bigint', {
    comment: '点赞数',
    nullable: true,
  })
  article_like_count: number;

  @CreateDateColumn({
    type: 'datetime',
    comment: '评论日期',
    nullable: true,
  })
  comment_date: Date;
}
