import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from './category.entity';

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn('increment')
  productId: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @ManyToOne(() => CategoryEntity, (category) => category.products)
  category: CategoryEntity;
}
