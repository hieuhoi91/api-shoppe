import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryEntity } from '../category/category.entity';

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  thumbnail: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  sku: string;

  @Column('category_id')
  category_id: string;

  @ManyToOne(() => CategoryEntity, (category) => category.product)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;
}
