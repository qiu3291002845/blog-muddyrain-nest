import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
/**
 * 分类列表
 */
export class Classifys {
  @PrimaryGeneratedColumn('increment', {
    comment: '分类ID',
  })
  classify_id: number;

  @Column('varchar', {
    comment: '分类名称',
    nullable: false,
    unique: true,
  })
  classify_name: string;

  @Column('varchar', {
    comment: '分类别名',
    nullable: false,
  })
  classify_alias: string;

  @Column('varchar', {
    comment: '分类描述',
    nullable: false,
  })
  classify_description: string;

  @Column('bigint', {
    comment: '父分类ID',
    nullable: true,
  })
  parent_classify_id: number;
}
