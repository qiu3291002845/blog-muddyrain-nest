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
    nullable: false,
  })
  user_id?: number;

  @Column('bigint', {
    comment: '分类ID',
    nullable: false,
  })
  classify_id?: number;

  @Column('bigint', {
    comment: '标签ID',
    nullable: false,
  })
  label_id?: number;

  @Column('varchar', {
    comment: '文章标题',
    nullable: false,
  })
  article_title: string;

  @Column('varchar', {
    comment: '文章内容',
    nullable: false,
  })
  article_content: string;

  @Column('bigint', {
    comment: '浏览量',
    nullable: false,
    default: 0,
  })
  article_views: number;

  @Column('bigint', {
    comment: '评论总数量',
    default: 0,
  })
  article_comment_count: number;

  @Column('bigint', {
    comment: '点赞数',
    nullable: true,
  })
  article_like_count: number;

  @CreateDateColumn({
    type: 'datetime',
    comment: '发表时间',
    nullable: true,
  })
  article_date: Date;
}
