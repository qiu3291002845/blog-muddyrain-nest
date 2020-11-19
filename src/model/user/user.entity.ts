import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
/**
 * 用户表
 */
export class Users {
  @PrimaryGeneratedColumn('increment', {
    comment: '用户ID',
  })
  user_id?: string;

  @Column('varchar', {
    comment: '用户名',
    nullable: false,
    unique: true,
  })
  user_name: string;

  @Column('varchar', {
    comment: '用户密码',
    nullable: false,
  })
  user_password: string;

  @Column('varchar', {
    comment: '用户邮箱',
    unique: true,
    nullable: false,
  })
  user_email: string;

  @Column('varchar', {
    nullable: false,
    default:
      'https://tse1-mm.cn.bing.net/th/id/OIP.bv5nJT3z-a780zysCbnMTAAAAA?w=140&h=150&c=7&o=5&pid=1.7',
    comment: '用户头像',
  })
  user_avatar: string;

  @CreateDateColumn({
    type: 'datetime',
    comment: '注册时间',
  })
  user_regisration_time: Date;

  @Column('varchar', {
    comment: '用户生日',
    nullable: true,
  })
  user_birthday: string;

  @Column('bigint', {
    comment: '用户年龄',
    nullable: true,
  })
  user_age: string;

  @Column('bigint', {
    comment: '用户手机号',
    nullable: true,
    unique: true,
  })
  user_phone: string;

  @Column('varchar', {
    comment: '用户昵称',
    nullable: true,
  })
  user_nickname: string;
}
