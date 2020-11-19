import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
/**
 * 好友列表
 */
export class UserFriends {
  @PrimaryGeneratedColumn('increment', {
    comment: '标识id',
  })
  id: number;

  @Column('bigint', {
    comment: '用户ID',
    nullable: true,
  })
  user_id: number;

  @Column('bigint', {
    comment: '好友ID',
    nullable: true,
  })
  user_friends_id: number;

  @Column('varchar', {
    comment: '好友备注',
    nullable: true,
  })
  user_note: string;

  @Column('varchar', {
    comment: '好友状态',
    nullable: true,
    default: '在线',
  })
  user_status: string;
}
