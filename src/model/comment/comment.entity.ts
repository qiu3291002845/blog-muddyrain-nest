import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
/**
 * 评论表
 */
export class Comments {
  @PrimaryGeneratedColumn('increment', {
    comment: '评论ID',
  })
  comment_id: number;

  @Column('bigint', {
    comment: '发表用户ID',
    nullable: true,
  })
  user_id: number;

  @Column('bigint', {
    comment: '评论博文ID',
    nullable: true,
  })
  article_id: number;

  @Column('bigint', {
    comment: '点赞数',
    nullable: true,
  })
  comment_like_count: number;

  @CreateDateColumn({
    type: 'datetime',
    comment: '评论日期',
    nullable: true,
  })
  comment_date: Date;

  @Column('text', {
    comment: '评论内容',
    nullable: true,
  })
  comment_content: string;

  @Column('bigint', {
    comment: '父评论ID',
    nullable: true,
  })
  parent_comment_id: number;
}
