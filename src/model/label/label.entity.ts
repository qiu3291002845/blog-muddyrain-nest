import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
/**
 * 标签列表
 */
export class Labels {
  @PrimaryGeneratedColumn('increment', {
    comment: '标签ID',
  })
  label_id: number;

  @Column('varchar', {
    comment: '标签名称',
    nullable: true,
    unique: true,
  })
  label_name: string;

  @Column('varchar', {
    comment: '标签别名',
    nullable: true,
  })
  label_alias: string;

  @Column('varchar', {
    comment: '标签描述',
    nullable: true,
  })
  label_description: string;
}
